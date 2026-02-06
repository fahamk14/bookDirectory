import { Box } from "@mui/material";
import { Book } from "../api/types";
import { BookCover } from "./bookCover";
import { BookInfo } from "./bookInfo";
import { useBookLogic } from "../hooks/useBookLogic";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const { handleBookClick } = useBookLogic(book);

  return (
    <Box 
      onClick={handleBookClick} 
      className="book-card" 
      role="button" 
      tabIndex={0} 
      aria-label={`Open ${book.title} by ${book.authors[0]?.name}`}
    >
      <BookCover 
        src={book.formats["image/jpeg"]} 
        alt={`Cover of ${book.title}`}
      />
      <BookInfo 
        title={book.title} 
        author={book.authors[0]?.name} 
      />
    </Box>
  );
};
