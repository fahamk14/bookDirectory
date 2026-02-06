import { Box } from "@mui/material";
import { Book } from "../api/types";
import { BookCover } from "./bookCover";
import { BookInfo } from "./bookInfo";
import { BOOK_FORMAT_PREFERENCES, ERROR_MESSAGES } from "../constants";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const handleBookClick = () => {
    let format = null;
    for (const pref of BOOK_FORMAT_PREFERENCES) {
      if (book.formats[pref]) {
        format = pref;
        break;
      }
    }
    
    if (format) {
      window.open(book.formats[format], '_blank');
    } else {
      alert(ERROR_MESSAGES.NO_VIEWABLE_VERSION);
    }
  };

  const coverImage = book.formats["image/jpeg"] || book.formats["image/jpg"] || book.formats["image/png"];

  return (
    <article 
      className="book-card"
      onClick={handleBookClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleBookClick();
        }
      }}
      aria-label={`Open ${book.title} by ${book.authors[0]?.name}`}
    >
      <BookCover 
        src={coverImage} 
        alt={`Cover of ${book.title}`}
        loading="lazy"
      />
      <BookInfo 
        title={book.title}
        author={book.authors[0]?.name}
      />
    </article>
  );
};
