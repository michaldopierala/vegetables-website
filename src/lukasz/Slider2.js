import React, { useState, useEffect } from "react";
import slider from './img/slider.jpg';
import slider2 from './img/slider2.jpg';
// import "./styles.css";

const images = [
  "./img/pinaple.jpg",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/239/200/300",
  "https://picsum.photos/id/240/200/300"
];

export default function Slider2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="Slider2">
      <button id="prev" onClick={prevSlide}>Prev</button>
      <img src={images[currentImageIndex]} alt="slider" />
      <button id='next' onClick={nextSlide}>Next</button>
    </div>
  )
}
