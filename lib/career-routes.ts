import { careersData } from "@/data/careers";

export const CAREER_ROUTE_PATHS = [
  "/careers",
  "/knowledge-center/careers",
  ...careersData.map((job) => `/careers/${job.id}` as const),
  ...careersData.map((job) => `/knowledge-center/careers/${job.id}` as const)
] as const;
