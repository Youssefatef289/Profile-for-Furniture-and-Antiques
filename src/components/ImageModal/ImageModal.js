import React, { useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import './ImageModal.css';

const ImageModal = () => {
  const { isOpen, currentImage, images, currentIndex, closeModal, nextImage, prevImage } = useModal();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal, nextImage, prevImage]);

  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={closeModal}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal} aria-label="إغلاق">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {images.length > 1 && (
          <>
            <button className="modal-nav prev" onClick={prevImage} aria-label="الصورة السابقة">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="modal-nav next" onClick={nextImage} aria-label="الصورة التالية">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}

        <div className="modal-image-container">
          <img src={currentImage} alt="معرض الصور" className="modal-image" />
        </div>

        {images.length > 1 && (
          <div className="modal-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;

