import { Highlight, themes } from 'prism-react-renderer';

// Define the props our component will accept
interface CodeBlockProps {
    code: string;
    language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
    return (
        <Highlight
            theme={themes.vsDark} // A great default dark/greyscale theme. We can customize this!
            code={code.trim()}
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                // The <pre> tag is the container for the code block.
                // We style it with Tailwind for padding, rounded corners, etc.
                <pre
                    className={`${className} rounded-lg p-4 my-6 overflow-x-auto text-sm`}
                    style={style}
                >
                    {/* The <code> tag holds the actual code content. */}
                    <code>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </code>
                </pre>
            )}
        </Highlight>
    );
};

export default CodeBlock;