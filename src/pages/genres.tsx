import { Box, Typography } from "@mui/material";
import { GenreCard } from "../components/genreCard";
import { useNavigate } from "react-router-dom";
import { GENRES } from "../constants";

export const Genres = () => {
  const navigate = useNavigate();

  return (
    <Box component="main" className="py-2xl">   

      <Box component="section" className="bg-lavender py-xl" sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "70%" }}>

          <Box component="header" className="mb-2xl">
            <Typography component="h1" className="hero-title">
              Gutenberg Project
            </Typography>

            <Typography component="p" className="hero-description">
              A social cataloging website that allows you to freely search its
              database of books, annotations, and reviews.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {GENRES.map((g) => (
              <Box key={g.title}>
                <GenreCard
                  title={g.title}
                  icon={g.icon}
                  onClick={() => navigate(`/books/${g.title}`)}
                />
              </Box>
            ))}
          </Box>

        </Box>
      </Box>
    </Box>
  );
};
