import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (imageSrc, imageList = [], index = 0) => {
    setCurrentImage(imageSrc);
    setImages(imageList.length > 0 ? imageList : [imageSrc]);
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
    setImages([]);
    setCurrentIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (images.length > 0) {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      setCurrentImage(images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setCurrentIndex(prevIndex);
      setCurrentImage(images[prevIndex]);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        currentImage,
        images,
        currentIndex,
        openModal,
        closeModal,
        nextImage,
        prevImage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

