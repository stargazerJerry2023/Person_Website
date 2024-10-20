import React, { useRef, useEffect } from 'react';
import { CourseImage } from './types';
import './Slider.css';

interface SliderProps {
  images: CourseImage[];
  handleMouseEnter: (sliderRef: React.RefObject<HTMLDivElement>) => void;
  handleMouseLeave: (sliderRef: React.RefObject<HTMLDivElement>) => void;
  openModal: (image: string) => void;
}

const Slider: React.FC<SliderProps> = ({
  images,
  handleMouseEnter,
  handleMouseLeave,
  openModal,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const imageWidth = 250; 
  const marginRight = 10; 
  const imageCount = images.length;


  const singleSetWidth = (imageWidth + marginRight) * imageCount;


  const totalWidth = singleSetWidth * 2;


  const speed = 100; 


  const duration = totalWidth / speed; 


  const slideTrackStyle: React.CSSProperties = {
    display: 'flex',
    width: `${totalWidth}px`,
    animation: `scroll ${duration}s linear infinite`,
  };

  return (
    <div className="slider">
      <div
        className="slide-track"
        ref={sliderRef}
        style={slideTrackStyle}
      >
        {images.map((slide, index) => (
          <div
            className="slide"
            key={`slide-${index}`}
            onMouseEnter={() => handleMouseEnter(sliderRef)}
            onMouseLeave={() => handleMouseLeave(sliderRef)}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              onClick={() => openModal(slide.src)}
              loading="lazy"
            />
          </div>
        ))}

        {images.map((slide, index) => (
          <div
            className="slide"
            key={`slide-duplicate-${index}`}
            onMouseEnter={() => handleMouseEnter(sliderRef)}
            onMouseLeave={() => handleMouseLeave(sliderRef)}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              onClick={() => openModal(slide.src)}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
