
import React, { useEffect, ReactNode } from 'react';
import './Modal.css'; 

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.classList.add('body-lock-scroll');

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.classList.remove('body-lock-scroll');
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]); 

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <button
            className="close-button-skill"
            onClick={onClose}
            aria-label="Close Modal"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
