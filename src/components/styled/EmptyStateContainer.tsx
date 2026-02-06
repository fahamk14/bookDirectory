import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "400px",
  textAlign: "center",
  padding: theme.spacing(3),
}));

export const EmptyStateTitle = styled("h6")(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: "text.primary",
  fontWeight: 600,
}));

export const EmptyStateMessage = styled("p")(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: "text.secondary",
  maxWidth: "400px",
  lineHeight: 1.5,
}));

export const RetryButton = styled("button")(({ theme }) => ({
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  backgroundColor: "#5E56E7",
  color: "white",
  border: "none",
  borderRadius: theme.spacing(0.5),
  cursor: "pointer",
  fontSize: "0.875rem",
  fontWeight: 500,
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "#4A45D6",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0px)",
  },
}));
