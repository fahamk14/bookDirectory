import axios from "axios";
import { API_BASE, IMAGE_MIME_TYPE } from "../constants";
import { BooksResponse } from "./types";

export const fetchBooks = async (url: string): Promise<BooksResponse> => {
  const response = await axios.get(url);
  return response.data;
};

export const buildBooksUrl = (topic = "", search = "") => {
  const params = new URLSearchParams({
    topic: topic?.toLowerCase() || "",
    mime_type: IMAGE_MIME_TYPE // Only fetch books with image covers
  });

  if (search) params.append("search", search);

  return `${API_BASE}?${params.toString()}`;
};
