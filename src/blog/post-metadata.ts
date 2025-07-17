export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export const posts: PostMeta[] = [
  {
    slug: "verifying-data-ingestion-in-microsoft-sentinel",
    title: "Verifying Data Ingestion in Microsoft Sentinel",
    date: "2024-11-11",
    summary:
      "Exploring a solution for silent log source monitoring in Microsoft Sentinel.",
  },
  {
    slug: "shfting-left-integrating-vulnerability-scanning-into-your-cicd-pipeline",
    title: "Shifting Left: Integrating Vulnerability Scanning into your CI/CD Pipeline",
    date: "2025-07-16",
    summary:
      "Leveraging npm audit to block the deployment of vulnerable software dependencies.",
  },
];
