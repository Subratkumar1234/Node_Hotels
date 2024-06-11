import React, { useState } from 'react';
import './Carousel.css';
import Gallery_4 from '../assets/Gallery_4.jpg';
import Gallery_5 from '../assets/Gallery_5.jpg';
import Gallery_6 from '../assets/Gallery_6.jpg';
import Gallery_7 from '../assets/Gallery_7.jpg';
import Gallery_8 from '../assets/Gallery_8.jpg';

const images = [Gallery_4,Gallery_5,Gallery_6,Gallery_7,Gallery_8];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="arrow prev">&lt;</button>
      <img src={images[currentIndex]} alt="Gallery" className="carousel-image" />
      <button onClick={nextImage} className="arrow next">&gt;</button>
    </div>
  );
}

export default Carousel;
