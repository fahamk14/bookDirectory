
import Fiction from "../assets/Fiction.svg";
import Philosophy from "../assets/Philosophy.svg";
import Drama from "../assets/Drama.svg";
import History from "../assets/History.svg";
import Humour from "../assets/Humour.svg";
import Adventure from "../assets/Adventure.svg";
import Politics from "../assets/Politics.svg";

// API Constants
export const API_BASE = "/api/books/";
export const IMAGE_MIME_TYPE = "image/jpeg";

// Format Preferences for Book Viewing
export const BOOK_FORMAT_PREFERENCES = [
  'text/html',
  'application/pdf', 
  'text/plain'
] as const;

// UI Constants
export const BOOK_COVER_HEIGHT = 162;
export const BOOK_COVER_WIDTH = 114;
export const DEBOUNCE_DELAY = 500;

// Skeleton Loading Counts
export const INITIAL_SKELETON_COUNT = 8;
export const PAGINATION_SKELETON_COUNT = 8;

// React Query Cache Settings
export const CACHE_SETTINGS = {
  STALE_TIME: 5 * 60 * 1000, // 5 minutes
  CACHE_TIME: 10 * 60 * 1000, // 10 minutes
  RETRY_COUNT: 3
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NO_VIEWABLE_VERSION: "No viewable version available",
  API_ERROR: "Failed to load books. Please try again.",
  NO_RESULTS: "No books found matching your search.",
  NETWORK_ERROR: "Network error. Please check your connection."
} as const;

// Genre Data
export const GENRES = [
  { title: "Fiction", description: "Fictional stories and novels", icon: Fiction },
  { title: "Philosophy", description: "Philosophical texts and theories", icon: Philosophy },
  { title: "Drama", description: "Dramatic works and plays", icon: Drama },
  { title: "History", description: "Historical documents and accounts", icon: History },
  { title: "Humour", description: "Comedy and humorous works", icon: Humour },
  { title: "Adventure", description: "Adventure and action stories", icon: Adventure },
  { title: "Politics", description: "Political texts and documents", icon: Politics }
] as const;
