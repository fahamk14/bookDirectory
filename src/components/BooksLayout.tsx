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
  useGrid?: boolean;
}

export const BooksLayout = ({ 
  topic, 
  search, 
  setSearch, 
  onBackClick, 
  children, 
  showLoader = false,
  loaderRef,
  useGrid = true
}: BooksLayoutProps) => {
  return (
    <Box component="main" aria-label={`${topic} books page`}>
      <Box component="header" className="bg-white content-wrapper py-lg">
        <Box className="page-header">
          <button
            type="button"
            onClick={onBackClick}
            className="icon-md"
            aria-label="Go back to genres"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              padding: 0
            }}
          >
            <Box component="img" src={Back} alt="Back arrow" />
          </button>
          <h1 className="page-title">{topic}</h1>
        </Box>
        <SearchBar value={search} onChange={setSearch} />
      </Box>
      
      <section className="bg-lavender py-lg" aria-label="Books list">
        <Box className={useGrid ? "content-wrapper books-grid" : "content-wrapper"}>
          {children}
          
          {showLoader && [...Array(PAGINATION_SKELETON_COUNT)].map((_, i) => (
            <BookCardSkeleton key={`skeleton-${i}`} />
          ))}
        </Box>
        
        {loaderRef && (
          <div 
            ref={loaderRef} 
            aria-label="Loading more books"
            style={{ height: '1px' }}
          />
        )}
      </section>
    </Box>
  );
};
