import { Card, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Next from "../assets/Next.svg";

interface GenreCardProps {
  title: string;
  icon: string;
  onClick: () => void;
}

export const GenreCard = ({ title, icon, onClick }: GenreCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${title}`);
    onClick();
  };

  return (
    <Card className="genre-card" onClick={handleClick}>
        <Box className="genre-card-content">
            <Box component="img" src={icon} alt={title} className="icon-md" />
            <Typography className="genre-card-title">{title.toUpperCase()}</Typography>
        </Box>
        <Box component="img" src={Next} alt="next" className="icon-md" />
    </Card>
  );
};
