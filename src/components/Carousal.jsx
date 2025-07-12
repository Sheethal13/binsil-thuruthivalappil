
import { useCallback, useEffect, useState } from 'react';
import Modal from './Modal.jsx';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

export default function Carousal({ onDone,images, index}) {
    const [currentIndex, setCurrentIndex] = useState(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      });

      useEffect(() => {
          document.body.style.overflow = "hidden";
        const handleKeyDown = (event) => {
          if (event.key === 'ArrowLeft') {
            handlePrev();
          } else if (event.key === 'ArrowRight') {
            handleNext();
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.body.style.overflow = "auto";
        };
      }, [handleNext, handlePrev]);
      const currentImage = images[currentIndex];

  return (
    <Modal title="" onClose={onDone}>
      <button className="carousel-button prev" onClick={(e) => {
    e.preventDefault();
    e.currentTarget.blur();
    handlePrev();
  }}>
        <FaAngleLeft/>
      </button>
        <img
          src={currentImage.imgSrc}
          alt={currentImage.alt}
          style={{ maxHeight: '90vh', maxWidth: '80vw' }}
        />
        <button className="carousel-button next" onClick={(e) => {
    e.preventDefault();
    e.currentTarget.blur();
    handleNext();
  }}>
        <FaAngleRight/>
      </button>
        
    </Modal>
  );
}
