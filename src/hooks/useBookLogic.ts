import { Book } from "../api/types";
import { BOOK_FORMAT_PREFERENCES, ERROR_MESSAGES } from "../constants";

export const useBookLogic = (book: Book) => {
  const handleBookClick = () => {
    const formats = book.formats;
    
    // Find the first available format in preferred order
    let selectedFormat = null;
    for (const format of BOOK_FORMAT_PREFERENCES) {
      if (formats[format]) {
        selectedFormat = formats[format];
        break;
      }
    }
    
    if (selectedFormat) {
      window.open(selectedFormat, "_blank");
    } else {
      alert(ERROR_MESSAGES.NO_VIEWABLE_VERSION);
    }
  };

  return {
    handleBookClick,
  };
};
