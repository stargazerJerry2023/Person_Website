import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { CourseImage } from './types';
import Slider from './Slider';


Modal.setAppElement('#root');

const Gallery: React.FC = () => {

  const Nature: CourseImage[] = [
    { src: './src/assets/IMGS/Nature_1.jpg', alt: 'Google Formula Preguntas' },
    { src: './src/assets/IMGS/Nature_2.jpg', alt: 'Google Formula Preguntas' },
    { src: './src/assets/IMGS/Nature_3.jpg', alt: 'Google Formula Preguntas' },
    { src: './src/assets/IMGS/Nature_4.jpg', alt: 'Google Formula Preguntas' },
    { src: './src/assets/IMGS/Nature_5.jpg', alt: 'Google Formula Preguntas' },
   
  ];

  const College: CourseImage[] = [
    { src: 'images/courses/data_science/crystal_course.png', alt: 'Crystal Course' },
    
  ];

  const ai_engineer: CourseImage[] = [
    { src: 'images/courses/ai_engineer/art_of_prompt_engineering.png', alt: 'Art of Prompt Engineering' },
   
  ];

  const full_stack_developer: CourseImage[] = [
    { src: 'images/courses/full_stack_developer/google_basicos_asistencia_tecnica.png', alt: 'Google Basicos Asistencia Tecnica' },
  
  ];




  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const openModal = (image: string): void => {
    setSelectedImage(image);
    setIsOpen(true);
    document.body.classList.add('body-lock-scroll');
  };


  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedImage(null);
    document.body.classList.remove('body-lock-scroll');
  };

  const handleMouseEnter = (sliderRef: React.RefObject<HTMLDivElement>): void => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = (sliderRef: React.RefObject<HTMLDivElement>): void => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div className="courses-section">
      <h1>Gallery</h1>


      <h2>Nature</h2>
      <Slider
        images={Nature}
        sliderClassName="slide-track-data_analysis"
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        openModal={openModal}
      />


      <h2>Data Science</h2>
      <Slider
        images={College}
        sliderClassName="slide-track-data_science"
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        openModal={openModal}
      />

      <h2>AI Engineer</h2>
      <Slider
        images={ai_engineer}
        sliderClassName="slide-track-ai_engineer"
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        openModal={openModal}
      />


      <h2>Full-Stack Developer</h2>
      <Slider
        images={full_stack_developer}
        sliderClassName="slide-track-full_stack"
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        openModal={openModal}
      />


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Course Image Modal"
        className="modal-course"
        overlayClassName="modal-overlay"
      >
        {selectedImage && (
          <div className="modal-content">
            <img src={selectedImage} alt="Selected Course" className="modal-image" />
            <button onClick={closeModal} className="close-button" aria-label="Close Modal">
              &times;
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
