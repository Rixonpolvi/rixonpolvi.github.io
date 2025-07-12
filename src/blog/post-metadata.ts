export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

export const posts: PostMeta[] = [
  {
    slug: "third-post",
    title: "Third Post",
    date: "2025-07-11",
    summary: "A brief summary of this fantastic new post.",
  },
  {
    slug: "2nd-post",
    title: "2ND Post",
    date: "2025-07-11",
    summary: "A brief summary of this fantastic new post.",
  },
  {
    slug: "first-post",
    title: "Test post",
    date: "2024-07-11", // Use YYYY-MM-DD format
    summary: "a",
  },
  // Add your next post's metadata here when you write it
];
