import { useParams, useNavigate } from "react-router-dom";
import { buildBooksUrl } from "../api/gutendex";
import { useInfiniteBooks } from "../hooks/useInfiniteBooks";
import { BookCard } from "../components/bookCard";
import { BooksLayout } from "../components/BooksLayout";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { INITIAL_SKELETON_COUNT } from "../constants";
import { BookCardSkeleton } from "../components/bookCardSkeleton";
import { EmptyState } from "../components/emptyState";

export const Books = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const url = buildBooksUrl(topic, debouncedSearch);
  const { books, loader, isLoading, isFetchingNextPage, error } = useInfiniteBooks(url);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleRetry = () => {
    window.location.reload();
  };

  // Loading state
  if (isLoading) {
    return (
      <BooksLayout
        topic={topic || ""}
        search={search}
        setSearch={setSearch}
        onBackClick={handleBackClick}
      >
        {[...Array(INITIAL_SKELETON_COUNT)].map((_, i) => (
          <BookCardSkeleton key={`skeleton-${i}`} />
        ))}
      </BooksLayout>
    );
  }

  // Error state
  if (error) {
    return (
      <BooksLayout
        topic={topic || ""}
        search={search}
        setSearch={setSearch}
        onBackClick={handleBackClick}
        useGrid={false} // Disable grid for error state
      >
        <EmptyState type="error" onRetry={handleRetry} />
      </BooksLayout>
    );
  }

  // Empty state
  if (books.length === 0 && !isLoading) {
    return (
      <BooksLayout
        topic={topic || ""}
        search={search}
        setSearch={setSearch}
        onBackClick={handleBackClick}
        useGrid={false} // Disable grid for empty state
      >
        <EmptyState type="no-results" />
      </BooksLayout>
    );
  }

  // Success state
  return (
    <BooksLayout
      topic={topic || ""}
      search={search}
      setSearch={setSearch}
      onBackClick={handleBackClick}
      showLoader={isFetchingNextPage}
      loaderRef={loader}
      useGrid={true} // Use grid for book cards
    >
      {books.map((b: any) => (
        <BookCard key={b.id} book={b} />
      ))}
    </BooksLayout>
  );
};
