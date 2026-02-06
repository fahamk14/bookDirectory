import axios from "axios";
import { API_BASE, IMAGE_MIME_TYPE } from "./constants";
import { BooksResponse } from "./types";

export const fetchBooks = async (url: string): Promise<BooksResponse> => {
  const response = await axios.get(url);
  return response.data;
};

export const buildBooksUrl = (topic?: string, search?: string): string => {
  const params = new URLSearchParams();
  
  if (topic) {
    params.append("topic", topic);
  }
  
  if (search) {
    params.append("search", search);
  }
  
  params.append("mime_type", IMAGE_MIME_TYPE);
  
  const queryString = params.toString();
  return queryString ? `${API_BASE}?${queryString}` : API_BASE;
};
