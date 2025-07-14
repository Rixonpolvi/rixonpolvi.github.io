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
];
