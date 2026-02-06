import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export const LazyImage = ({ src, alt, className, placeholder }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={className} style={{ backgroundColor: '#f0f0f0' }}>
        <span style={{ color: '#A0A0A0' }}>Failed to load</span>
      </div>
    );
  }

  return (
    <picture>
      <source
        srcSet={`
          ${src}?format=webp&w=200 200w,
          ${src}?format=webp&w=400 400w,
          ${src}?format=webp&w=800 800w
        `}
        type="image/webp"
      />
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </picture>
  );
};
