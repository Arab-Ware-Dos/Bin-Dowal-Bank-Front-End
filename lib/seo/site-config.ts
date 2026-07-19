import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://bindowal-bank.vercel.app";

function normalizeSiteUrl(value: string): string {
  const normalized = value.trim().replace(/\/+$/, "");
  const parsed = new URL(normalized);

  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error("SITE_URL must use http or https");
  }

  return parsed.origin;
}

export const SITE_URL = normalizeSiteUrl(
  process.env.SITE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    DEFAULT_SITE_URL,
);

export const SITE_METADATA_BASE = new URL(SITE_URL);

export const baseMetadata: Metadata = {
  metadataBase: SITE_METADATA_BASE,
};
