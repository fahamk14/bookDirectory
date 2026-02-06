import { Box } from "@mui/material";
import { BOOK_COVER_HEIGHT } from "../constants";
import { useState } from "react";

interface BookCoverProps {
  src?: string;
  onError?: () => void;
  alt?: string;
}

export const BookCover = ({ src, onError, alt }: BookCoverProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    onError?.();
  };

  if (imageError || !src) {
    return (
      <Box 
        className="book-cover"
        sx={{
          width: "100%",
          height: BOOK_COVER_HEIGHT,
          borderRadius: "8px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="span" sx={{ color: "#A0A0A0", fontSize: "0.875rem" }}>
          {imageError ? "No Cover" : "Loading..."}
        </Box>
      </Box>
    );
  }

  return (
    <Box 
      component="img" 
      src={src} 
      width="100%" 
      height={BOOK_COVER_HEIGHT} 
      className="book-cover"
      onError={handleImageError}
      alt={alt}
    />
  );
};
