import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import './imageModal.css';

export default function ImageModal({ images, initialIndex = 0, onClose }) {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const closeImage = () => {
    onClose();
  };

  return (
    <div className="image-modal" onClick={closeImage}>
      <div className="image-modal__content" onClick={(e) => e.stopPropagation()}>
        <Swiper
          initialSlide={selectedIndex}
          slidesPerView={1}
          modules={[Navigation]}
          onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
        >
          {images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={item} alt={`fullscreen ${idx}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="image-modal__close" onClick={closeImage}>×</button>
      </div>
    </div>
  );
}
