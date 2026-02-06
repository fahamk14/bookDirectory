import { Box } from "@mui/material";
import { SearchBar } from "./searchbar";
import { BookCardSkeleton } from "./bookCardSkeleton";
import { INITIAL_SKELETON_COUNT, PAGINATION_SKELETON_COUNT } from "../constants";
import Back from "../assets/Back.svg";

interface BooksLayoutProps {
  topic: string;
  search: string;
  setSearch: (search: string) => void;
  onBackClick: () => void;
  children: React.ReactNode;
  showLoader?: boolean;
  loaderRef?: React.RefObject<HTMLDivElement | null>;
  useGrid?: boolean; // Control whether to use grid layout
}

export const BooksLayout = ({ 
  topic, 
  search, 
  setSearch, 
  onBackClick, 
  children, 
  showLoader = false,
  loaderRef,
  useGrid = true // Default to grid for book cards
}: BooksLayoutProps) => {
  return (
    <Box>
      <Box className="bg-white content-wrapper py-lg">
        <Box className="page-header">
          <Box 
            component="img" 
            src={Back} 
            className="icon-md"
            onClick={onBackClick}
            sx={{ cursor: 'pointer' }}
            aria-label="Go back to genres"
          />
          <Box component="span" className="page-title">
            {topic}
          </Box>
        </Box>
        <SearchBar value={search} onChange={setSearch} />
      </Box>
      
      <Box className="bg-lavender py-lg">
        <Box className={useGrid ? "content-wrapper books-grid" : "content-wrapper"}>
          {children}
          
          {showLoader && [...Array(PAGINATION_SKELETON_COUNT)].map((_, i) => (
            <BookCardSkeleton key={`skeleton-${i}`} />
          ))}
        </Box>
        
        {loaderRef && <div ref={loaderRef} />}
      </Box>
    </Box>
  );
};
