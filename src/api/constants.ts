// API related constants
export const API_BASE = "/api/books/";
export const IMAGE_MIME_TYPE = "image/jpeg";
export const CACHE_SETTINGS = {
  STALE_TIME: 5 * 60 * 1000, // 5 minutes
  CACHE_TIME: 10 * 60 * 1000, // 10 minutes
  RETRY_COUNT: 3,
} as const;
