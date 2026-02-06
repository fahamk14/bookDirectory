import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBooks } from "../api/gutendex";
import { CACHE_SETTINGS } from "../constants";
import { BooksResponse, Book } from "../api/types";

export const useInfiniteBooks = (initialUrl: string) => {
  const loader = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
    error,
  } = useInfiniteQuery<BooksResponse>({
    queryKey: ['books', initialUrl],
    queryFn: async ({ pageParam }: { pageParam: unknown }) => {
      const url = pageParam as string;
      // Transform external URLs to use our proxy
      const proxiedUrl = url.includes('gutendex.com') 
        ? url.replace('https://gutendex.com', '/api')
        : url;
      return fetchBooks(proxiedUrl);
    },
    getNextPageParam: (lastPage) => {
      // Transform the next URL to use our proxy
      if (lastPage.next) {
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

  useEffect(() => {
    if (!loader.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loader.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return { 
    books, 
    loader, 
    isLoading, // Initial loading state
    isFetching, // Any fetching state (initial + pagination)
    isFetchingNextPage, // Pagination loading state
    error, // API error state
  };
};
