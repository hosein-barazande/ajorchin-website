"use client";

import { useState, useEffect, HTMLAttributes } from "react";

interface SlideshowProps extends HTMLAttributes<HTMLDivElement> {
  images: string[];
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 3000, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "90%",
        height: "400px",
        top: 30, 
        overflow: "hidden",
      }}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          style={{
            position: "absolute",    
            objectFit: "contain",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "opacity 1s ease-in-out",
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 2 : 1,
          }}
        />
      ))}
    </div>
  );
  
};

export default Slideshow;
