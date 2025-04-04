import React, { useState } from 'react';
import Modal from 'react-modal';
import { CourseImage } from './types';
import Slider from './Slider';
import './Gallery.css';

Modal.setAppElement('#root');

const Gallery: React.FC = () => {
  const Nature: CourseImage[] = [
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_1.jpg?alt=media&token=c4b90d62-188d-445b-8bbc-a1e1e01e95cc', alt: 'Nature Image 1' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_2.jpg?alt=media&token=b109b8ed-5a5c-4b1f-b139-7dea5b2b2545', alt: 'Nature Image 2' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_3.jpg?alt=media&token=6b1d5793-ecc6-4580-9433-7a467dd934fb', alt: 'Nature Image 3' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_4.jpg?alt=media&token=71f82239-d483-4264-8376-661cadf83159', alt: 'Nature Image 4' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_5.jpg?alt=media&token=b78b8f6d-6237-4c16-b31d-e7f60b6543ba', alt: 'Nature Image 5' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_6.jpg?alt=media&token=63235dd0-1f86-45cb-a3ec-d8561bf22568', alt: 'Nature Image 6' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_7.jpg?alt=media&token=f1c8be04-4ec1-45bb-9f0a-792630c1a177', alt: 'Nature Image 7' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_8.jpg?alt=media&token=c6d4a22a-f95c-4917-be07-99c947796d4b', alt: 'Nature Image 8' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_9.jpg?alt=media&token=28902566-6f03-438d-b333-aafbc1a78adf', alt: 'Nature Image 9' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FNature_10.jpg?alt=media&token=422e882d-b33a-4ec5-b01d-b226ce5d9f7f', alt: 'Nature Image 10' },
  ];

  const College: CourseImage[] = [
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_1.jpg?alt=media&token=b92d8388-5c96-424d-8914-efd4a994b06c', alt: 'Crystal Course' },
    {src:'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_2.jpg?alt=media&token=131389b0-9365-41f7-b9d8-0ec14c6ac8a3', alt: 'Crystal Course 2' },
    {src:'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_3.jpg?alt=media&token=cfa4e55e-8c61-42dc-8b0b-5cd93ee3ebc6', alt: 'Crystal Course 3' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_4.jpg?alt=media&token=5af72382-41e0-4f61-93a1-57a22bb688f2', alt: 'Crystal Course 4' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_5.jpg?alt=media&token=cc158fcd-1f43-458c-b03b-2169a084d483', alt: 'Crystal Course 5' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_6.jpg?alt=media&token=e34d661e-ffc7-4dd5-aab1-734a2dd307f8', alt: 'Crystal Course 6' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_7.jpg?alt=media&token=aeed4290-e238-4978-841f-ce4a990832ab', alt: 'Crystal Course 7' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_8.jpg?alt=media&token=56290926-adde-483b-9a03-8df8d6b31783', alt: 'Crystal Course 8' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_9.jpg?alt=media&token=f3a56150-4128-44e6-8136-41e5c6927c92', alt: 'Crystal Course 9' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FCollege_10.jpg?alt=media&token=e23a1d94-f924-4de0-bec9-221f4c46c311' , alt: 'Crystal Course 10' },
  
  ];

  const Random: CourseImage[] = [
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_1.jpg?alt=media&token=0339160f-7235-4457-a6e3-2c9607cd0def', alt: 'Art of Prompt Engineering' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_2.jpg?alt=media&token=6a41d82e-1640-4ae7-935a-42931f4f41d4', alt: 'Art of Prompt Engineering 2' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_3.JPG?alt=media&token=7bdaa58e-8177-4203-b160-719d327b5571', alt: 'Art of Prompt Engineering 3' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_4.jpg?alt=media&token=374efc00-800d-452b-a679-fd0b874f9e71', alt: 'Art of Prompt Engineering 4' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_5.JPG?alt=media&token=ec8c8bc1-e5b5-4830-9ef7-2699b0924401', alt: 'Art of Prompt Engineering 5' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_6.jpg?alt=media&token=32413f0b-d2e2-442b-84ae-73036cdf42dd', alt: 'Art of Prompt Engineering 6' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_7.jpg?alt=media&token=77c15c65-af4d-4223-93a4-3a664a54e29a', alt: 'Art of Prompt Engineering 8' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_8.JPG?alt=media&token=c185708f-5960-48a6-b0cc-f602bf7beed6', alt: 'Art of Prompt Engineering 9' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_9.JPG?alt=media&token=6afc5b75-61a8-42e5-b2bc-a66378391f4e', alt: 'Art of Prompt Engineering 10' },
    {src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FRandom_10.JPG?alt=media&token=b9c4e146-04bd-4cc1-8920-0f80dfef6107', alt: 'Art of Prompt Engineering 12' },
  ];

  const Interests: CourseImage[] = [
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_1.jpg?alt=media&token=f034b77d-f708-4321-89c9-d4593c37b846', alt: 'Google Basicos Asistencia Tecnica' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_2.jpg?alt=media&token=c8871700-2b9b-45d9-aea0-98c58e07c7f2', alt: 'Google Basicos Asistencia Tecnica 2' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_3.jpg?alt=media&token=bc25776a-6a6b-46fc-8731-b4d2fdc32191', alt: 'Google Basicos Asistencia Tecnica 3' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_4.jpg?alt=media&token=8f6dfec1-c6dc-43c6-afbc-bfbf8a426a5e', alt: 'Google Basicos Asistencia Tecnica 4' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_5.jpg?alt=media&token=2b7f26cb-7a0b-4028-927c-0d5a37704f3d', alt: 'Google Basicos Asistencia Tecnica 5' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_6.png?alt=media&token=1e643b3f-3e6b-4caa-82bd-3e6d8449a548', alt: 'Google Basicos Asistencia Tecnica 6' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_7.jpg?alt=media&token=77aab1fa-9bf8-4082-aa3c-b1741be6ba2d', alt: 'Google Basicos Asistencia Tecnica 7' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_8.jpg?alt=media&token=b62eb457-2dfd-4139-b50e-6b4ee1b943b3', alt: 'Google Basicos Asistencia Tecnica 8' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_9.jpg?alt=media&token=5f3fd01c-018c-4257-8a7b-3aa125ad423e', alt: 'Google Basicos Asistencia Tecnica 9' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/discover-rgv.appspot.com/o/Personal%2FIntrest_10.jpg?alt=media&token=e8edba9f-c123-4bb5-8a76-c15b800abfbd', alt: 'Google Basicos Asistencia Tecnica 10' },
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
      <h1 className='text-teal-300 text-5xl sm:text-4xl font-mono neon-effect'>Gallery</h1>


      <h2>Nature</h2>
      <Slider
        images={Nature}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        openModal={openModal}
      />


      <h2>College</h2>
      <Slider
        images={College}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        openModal={openModal}
      />


      <h2>Random</h2>
      <Slider
        images={Random}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        openModal={openModal}
      />

      <h2 >Interests</h2>
      <Slider
        images={Interests}
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
