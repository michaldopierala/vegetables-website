import React, { useState, useEffect } from "react";
// import slider from './img/slider.jpg';
// import slider2 from './img/slider2.jpg';
// import "./styles.css";

const images = [
  "./img/slider1.jpg",
  "./img/slider2.jpg"
];

export default function Slider2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 6000);
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
    <div className="Slider">
      <button id="prev" onClick={prevSlide}>&#8249;</button>
      <img src={images[currentImageIndex]} alt="slider" />
      <button id='next' onClick={nextSlide}>&#8250;</button>
      <div className="text">
        <div>We supply wholesale fruits and vegetables to your door</div>
        {/* <div><mark>Vegetables</mark></div> 
        <div><mark>Fruit</mark></div> 
        <div><mark>Mushrooms</mark></div>  */}
        </div>
    </div>
  )
}
