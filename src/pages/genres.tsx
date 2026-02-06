import { Box, Grid, Typography } from "@mui/material";
import { GenreCard } from "../components/genreCard";
import { useNavigate } from "react-router-dom";
import { GENRES } from "../constants";

export const Genres = () => {
  const navigate = useNavigate();

  return (
  <Box className="py-2xl">   

    <Box className="bg-lavender py-xl" sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "70%" }}>

        <Box className="mb-2xl">
          <Typography variant="h1" className="hero-title">
            Gutenberg Project
          </Typography>

          <Typography variant="body1" className="hero-description">
            A social cataloging website that allows you to freely search its
            database of books, annotations, and reviews.
          </Typography>
        </Box>

        <Grid container columnSpacing={12} rowSpacing={4}>
          {GENRES.map((g) => (
            <Grid item key={g.title}>
              <GenreCard
                title={g.title}
                icon={g.icon}
                onClick={() => navigate(`/books/${g.title}`)}
              />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>

  </Box>
);

};
