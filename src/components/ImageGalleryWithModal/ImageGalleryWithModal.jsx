import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ImageModal from '../ImageModal/ImageModal';
import './imageGalleryWithModal.css'

export default function ImageGalleryWithModal({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={5}
        breakpoints={{
          480: { spaceBetween: 10 },
          1200: { spaceBetween: 16 },
        }}
        modules={[Navigation]}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="image-gallery-swiper-item">
            <img
              src={item}
              alt="image"
              onClick={() => openImage(index)}
              style={{ cursor: 'pointer' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedIndex !== null && (
        <ImageModal
          initialIndex={selectedIndex}
          images={images}
          onClose={closeImage}
        />
      )}
    </>
  );
}
