import React, { useState, useRef } from 'react';
import styles from './ImageCarousel.css';

const ImageCarousel = ({ item }) => {
  const images = [item.img1, item.img2, item.img3, item.img4].filter((img) => img !== '');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const scrollLeft = containerRef.current.scrollLeft;
    const index = Math.round(scrollLeft / containerWidth);
    setCurrentImageIndex(index);
  };

  return (
    <>
    <div className="image-carousel" onScroll={handleScroll} ref={containerRef}>
      {images.map((image, index) => (
        <img
          key={index}
          className={`img ${index === currentImageIndex ? 'current' : ''}`}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
    </>
  );
};

export default ImageCarousel;
