import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBooks } from "../api/gutendex";
import { CACHE_SETTINGS } from "../api/constants";
import { BooksResponse, Book } from "../api/types";

export const useInfiniteBooks = (initialUrl: string) => {
  const loader = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["books", initialUrl],
    queryFn: ({ pageParam = initialUrl }) => fetchBooks(pageParam),
    getNextPageParam: (lastPage: BooksResponse) => {
      if (lastPage.next) {
        // Transform external API URL to local proxy URL
        return lastPage.next.replace('https://gutendex.com', '/api');
      }
      return lastPage.next;
    },
    initialPageParam: initialUrl,
    staleTime: CACHE_SETTINGS.STALE_TIME,
    gcTime: CACHE_SETTINGS.CACHE_TIME,
    retry: CACHE_SETTINGS.RETRY_COUNT,
  });

  const books = data?.pages.reduce((acc: Book[], page: BooksResponse) => {
    return acc.concat(page.results);
  }, []) || [];

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    const currentLoader = loader.current;
    if (!currentLoader) return;

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
      rootMargin: '100px',
    });

    observer.observe(currentLoader);

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [handleObserver]);

  return {
    books,
    loader,
    isLoading,
    isFetchingNextPage,
    error,
    hasNextPage,
  };
};
