// Centralized expectations for production route counts and sitemap URL counts.
// This file serves as the single source of truth for drift tests and sitemap validation
// to detect unintended route additions or removals without duplicating hardcoded numbers across multiple test files.

export const EXPECTED_PRODUCTION_ROUTE_FAMILIES = 74;
export const EXPECTED_PRODUCTION_LOCALIZED_URLS = EXPECTED_PRODUCTION_ROUTE_FAMILIES * 2;
