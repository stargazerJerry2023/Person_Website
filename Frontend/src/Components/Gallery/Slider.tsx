import React, { useRef } from 'react';
import { CourseImage } from './types';
import './Slider.css';

interface SliderProps {
  images: CourseImage[];
  sliderClassName: string;
  handleMouseEnter: (sliderRef: React.RefObject<HTMLDivElement>) => void;
  handleMouseLeave: (sliderRef: React.RefObject<HTMLDivElement>) => void;
  openModal: (image: string) => void;
}

const Slider: React.FC<SliderProps> = ({
  images,
  sliderClassName,
  handleMouseEnter,
  handleMouseLeave,
  openModal,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="slider">
      <div
        className={sliderClassName}
        ref={sliderRef}
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
