import { normalizeSearchText } from "./normalize-search-text";

/**
 * Calculates a match score for a search document against a query.
 * @param query The user's search query
 * @param title The document's title
 * @param description The document's description
 * @param keywords The document's keywords
 */
export function calculateSearchScore(
  query: string,
  title: string,
  description?: string,
  keywords?: string[]
): number {
  const normQuery = normalizeSearchText(query);
  if (!normQuery) return 0;

  const normTitle = normalizeSearchText(title);
  const normDesc = description ? normalizeSearchText(description) : "";
  const normKeywords = keywords ? keywords.map(normalizeSearchText) : [];

  // Exact title match: Highest priority
  if (normTitle === normQuery) {
    return 100;
  }

  // Title starts with query
  if (normTitle.startsWith(normQuery)) {
    return 80;
  }

  // Title contains the full phrase
  if (normTitle.includes(normQuery)) {
    return 60;
  }

  // Query words matching
  const queryWords = normQuery.split(" ").filter(Boolean);
  if (queryWords.length === 0) return 0;

  let score = 0;
  let titleMatches = 0;
  let descMatches = 0;
  let keywordMatches = 0;

  for (const word of queryWords) {
    if (normTitle.includes(word)) titleMatches++;
    if (normDesc.includes(word)) descMatches++;
    if (normKeywords.some((k) => k.includes(word))) keywordMatches++;
  }

  // Coverage ratio (how many query words were found in the title)
  if (titleMatches === queryWords.length && queryWords.length > 1) {
    score += 50; // All words found in title, but not exact phrase
  } else if (titleMatches > 0) {
    // 40 points max for title word matches
    score += (titleMatches / queryWords.length) * 40;
  }

  if (descMatches > 0) {
    // 20 points max for desc word matches
    score += (descMatches / queryWords.length) * 20;
  }

  if (keywordMatches > 0) {
    // 30 points max for keyword matches
    score += (keywordMatches / queryWords.length) * 30;
  }

  // Add full phrase match in description
  if (normDesc.includes(normQuery)) {
    score += 15;
  }

  return score;
}
