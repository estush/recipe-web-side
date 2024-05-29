import React, { useState, useEffect } from 'react';
import '../css/ImageSlide.css'; // Import CSS for styling

// const images = ['../Images/חומוס.jpg', '../Images/3 כפות תבלינים.jpg', '../Images/4 כפות.jpg']; // Add your image paths here

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
