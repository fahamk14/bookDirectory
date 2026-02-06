import { Typography } from "@mui/material";

interface BookInfoProps {
  title: string;
  author?: string;
}

export const BookInfo = ({ title, author }: BookInfoProps) => {
  return (
    <>
      <Typography variant="body2" className="book-title">
        {title.toUpperCase()}
      </Typography>
      <Typography variant="body2" className="book-author">
        {author}
      </Typography>
    </>
  );
};
