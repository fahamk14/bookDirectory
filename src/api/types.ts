export interface Book {
  id: number;
  title: string;
  authors: Array<{ name: string }>;
  formats: {
    "image/jpeg": string;
    [key: string]: string | undefined;
  };
}

export interface BooksResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}