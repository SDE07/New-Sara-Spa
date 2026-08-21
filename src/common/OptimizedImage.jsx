import React from 'react';

export default function OptimizedImage({ src, alt, className = "", ...props }) {
  return (
    <img
      src={src || "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"}
      alt={alt || "Sara SPA Image"}
      loading="lazy"
      decoding="async"
      className={`object-cover ${className}`}
      {...props}
    />
  );
}
