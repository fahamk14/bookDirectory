
import Fiction from "../assets/Fiction.svg";
import Philosophy from "../assets/Philosophy.svg";
import Drama from "../assets/Drama.svg";
import History from "../assets/History.svg";
import Humour from "../assets/Humour.svg";
import Adventure from "../assets/Adventure.svg";
import Politics from "../assets/Politics.svg";

// UI Constants
export const BOOK_FORMAT_PREFERENCES = ['text/html', 'application/pdf', 'text/plain'] as const;

export const BOOK_COVER_HEIGHT = 162;
export const BOOK_COVER_WIDTH = 114;
export const DEBOUNCE_DELAY = 500;

export const INITIAL_SKELETON_COUNT = 8;
export const PAGINATION_SKELETON_COUNT = 4;

export const ERROR_MESSAGES = {
  NO_VIEWABLE_VERSION: "No viewable version available",
  API_ERROR: "Failed to load books. Please try again.",
  NO_RESULTS: "No books found matching your search.",
  NETWORK_ERROR: "Network error. Please check your connection."
} as const;

export const GENRES = [
  {
    title: "Fiction",
    icon: Fiction,
    description: "Imaginative stories and literary works"
  },
  {
    title: "Philosophy",
    icon: Philosophy,
    description: "Philosophical texts and theories"
  },
  {
    title: "Drama",
    icon: Drama,
    description: "Theatrical plays and dramatic works"
  },
  {
    title: "History",
    icon: History,
    description: "Historical accounts and documents"
  },
  {
    title: "Humour",
    icon: Humour,
    description: "Comedy and humorous writings"
  },
  {
    title: "Adventure",
    icon: Adventure,
    description: "Adventure stories and explorations"
  },
  {
    title: "Politics",
    icon: Politics,
    description: "Political texts and government documents"
  }
] as const;
