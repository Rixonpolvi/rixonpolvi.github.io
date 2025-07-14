import CodeBlock from '../../components/CodeBlock/CodeBlock';

const VerifyingDataIngestioninMicrosoftSentinel: React.FC = () => {

    const dataTable = `
    let CriticalHostList = datatable(Computer:string) [
    "DC-PROD-01",       // Domain Controller
    "DC-PROD-02",
    "SQL-FINANCE-01",   // Finance SQL Server
    "WEB-APP-CORE-01",  // Core Business App Server
    "MISSING-SERVER-01" // A server that is completely offline
];
let silent_threshold = 6h;
    `
    const fullQuery = `
    CriticalHostList
| join kind=leftouter (
    Heartbeat
    | summarize LastHeartbeat=max(TimeGenerated) by Computer
) on Computer
| where isnull(LastHeartbeat) or (now() - LastHeartbeat > silent_threshold)
| project
    Computer,
    LastHeartbeat,
    Status = iff(isnull(LastHeartbeat), "Never Seen in Lookback", "Silent")
    
    `

    return (
        <article>
            <p className="mb-4">
                Nothing exposes blind spots in your security posture faster than discovering your 'protected' systems haven't reported in days.
                You've invested months configuring data connectors, tuning detection rules, and building dashboards.
                Without heartbeat monitoring, you're flying blind on whether any of it still functions.
            </p>
            <p className="mb-4">

            </p>
            <p className="mb-4">
                One solution to this is monitoring of logs via the <b>Heartbeat</b> table.
                The Heartbeat table in Microsoft Sentinel logs connectivity and health status of Azure Agents.
                By querying this table, we can check to make sure our agent-based log sources are up and healthy.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">Step 1: Define the Critical Host List</h3>
            <p className="mb-4">
                This list is the key to our query.
            </p>
            <p className="mb-4">
                Let's start by crafting a <code>datable</code> with the hosts we want to perform log source monitoring on.
                Each of these hosts will have their own dedicated Azure Monitor Agent we will be tracking via the Heartbeat table.
            </p>
            <p className="mb-4">
                We will also define our <code>silent_threshold</code>.
                This is how long the agent is allowed to not have reached out.
            </p>
            <CodeBlock code={dataTable} language="SQL" />
            <p className="mb-4">

            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">Step 2: Building the Query Logic</h3>
            <p className="mb-4">
                We want to take the list we built above and perform a <code>left outer join</code> against the Heartbeat table.
                This ensures we have all of our monitored hosts in the results.

                There are two failure modes we need to account for with this query -
            </p>
            <ol className="list-decimal list-inside space-y-2">
                <li>
                    <b>Silent Hosts:</b> The server has reported before, but its last heartbeat is older than our <code>silent_threshold</code>.
                </li>
                <li>
                    <b>Missing Hosts:</b> The server is on our critical list but has <i>never</i> sent a heartbeat within the query's entire lookback period.
                </li>
            </ol>
            <h3 className="text-xl font-bold mt-6 mb-2">Interpreting the Results</h3>
            <CodeBlock code={fullQuery} language="SQL" />
            <p className="mb-4">
                Below is the simulated output from our query. It clearly flags two servers for the operations team to investigate: one that recently fell silent and another that is completely missing.
            </p>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Computer</th>
                            <th scope="col">LastHeartbeat [UTC]</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>SQL-FINANCE-01</code></td>
                            <td><code>2024-10-26T18:00:00.000Z</code></td>
                            <td>Silent</td>
                        </tr>
                        <tr>
                            <td><code>MISSING-SERVER-01</code></td>
                            <td><em>null</em></td>
                            <td>Never Seen in Lookback</td>
                        </tr>
                    </tbody>
                    <caption>
                        Alert output showing critical hosts that are either silent or have never sent logs.
                    </caption>
                </table>
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">Making it Production-Ready</h3>
            <p className="mb-4">
                With this query, you can now reliably detect both intermittently silent and completely missing agents. To productionize this solution, consider these next steps:
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <b>Create an Analytics Rule:</b> Embed this KQL into a scheduled analytics rule to automatically generate incidents for your security team.
                </li>
                <li>
                    <b>Use a Watchlist:</b> Migrate the <code>CriticalHostList</code> from the query into a Microsoft Sentinel Watchlist. This decouples your logic from your configuration, allowing the list to be easily updated by your team without editing the rule itself.
                </li>
            </ul>
        </article >
    );
};

export default VerifyingDataIngestioninMicrosoftSentinel;