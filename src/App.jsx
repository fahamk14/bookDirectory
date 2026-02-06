import { ThemeProvider, Box } from "@mui/material";
import { theme } from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Genres} from "./pages/genres";
import {Books} from "./pages/books";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>
            <Routes>
              <Route path="/" element={<Genres />} />
              <Route path="/books/:topic" element={<Books />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );;
}
