import { ERROR_MESSAGES } from "../constants";
import { 
  EmptyStateContainer, 
  EmptyStateTitle, 
  EmptyStateMessage, 
  RetryButton 
} from "./styled/EmptyStateContainer";

interface EmptyStateProps {
  type: "no-results" | "error" | "no-books";
  onRetry?: () => void;
}

export const EmptyState = ({ type, onRetry }: EmptyStateProps) => {
  const getContent = () => {
    switch (type) {
      case "no-results":
        return {
          title: "No Books Found",
          message: ERROR_MESSAGES.NO_RESULTS,
          showButton: false
        };
      case "error":
        return {
          title: "Something went wrong",
          message: ERROR_MESSAGES.API_ERROR,
          showButton: true
        };
      case "no-books":
        return {
          title: "No Books Available",
          message: "There are no books available for this topic.",
          showButton: false
        };
      default:
        return {
          title: "Unknown Error",
          message: "An unexpected error occurred.",
          showButton: true
        };
    }
  };

  const content = getContent();

  return (
    <EmptyStateContainer>
      <EmptyStateTitle>
        {content.title}
      </EmptyStateTitle>
      <EmptyStateMessage>
        {content.message}
      </EmptyStateMessage>
      {content.showButton && onRetry && (
        <RetryButton onClick={onRetry}>
          Try Again
        </RetryButton>
      )}
    </EmptyStateContainer>
  );
};
