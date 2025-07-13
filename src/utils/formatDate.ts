export const formatDate = (dateString: string | null): string => {
  // If the dateString is null (or otherwise falsy), return a fallback.
  // For the blog, returning an empty string might be better than 'Present'.
  if (!dateString) {
    return "Present";
  }

  // Create a date object. The constructor correctly handles "YYYY-MM-DD" format.
  const date = new Date(dateString);

  // Format the date. 'UTC' is added to ensure consistency across time zones.
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric", // Added day for more precision on blog posts
    timeZone: "UTC",
  });
};
