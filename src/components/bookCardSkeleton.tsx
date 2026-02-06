import { Box, Skeleton } from "@mui/material";

export const BookCardSkeleton = () => {
  return (
    <Box className="book-card">
      <Skeleton 
        variant="rectangular"
        width={114}
        height={162}
        className="book-cover"
        sx={{
          borderRadius: "8px",
        }}
      />
      <Skeleton 
        variant="text"
        width="100%"
        className="book-title"
        sx={{
          height: '2.4em',
        }}
      />
      <Skeleton 
        variant="text"
        width="80%"
        className="book-author"
        sx={{
          height: '0.75rem',
        }}
      />
    </Box>
  );
};
