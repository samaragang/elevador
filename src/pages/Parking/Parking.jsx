import React, { useEffect, useState } from 'react'
import './parking.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import CatalogPreview from '../../components/CatalogPreview/CatalogPreview'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import imgParking1 from '/src/assets/images/parking3.jpg';
import imgParking2 from '/src/assets/images/parking2.jpg';
import imgParking3 from '/src/assets/images/parking1.jpg';

const parkingData = [
  {
    imgName: imgParking1
  },
  {
    imgName: imgParking2
  },
  {
    imgName: imgParking3
  },
]

export default function Parking() {
  const [selectedIndex, setSelectedIndex] = useState(null);


  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);
  return (
    <div className='parking'>
      <div className="container">
        <div className="parking__inner">
          <CatalogPreview />
          <h3 className='block-title'>Автомобильные <br />парковочные системы</h3>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={5}
            breakpoints={{
              480: {
                spaceBetween: 10,
              },
              1200: {
                spaceBetween: 16,
              }
            }}
            modules={[Navigation]}
          >
            {parkingData.map((item, index) => (
              <SwiperSlide key={index} className='parking-swiper-item'>
                <img
                  src={item.imgName}
                  alt="parking"
                  onClick={() => openImage(index)}
                  style={{ cursor: 'pointer' }}
                />


              </SwiperSlide>
            ))}
          </Swiper>
          <section className="parking-info">
            <h3 className="section-title">Автомобильные парковочные системы</h3>
            <div className="section-description">
              Парковочное оборудование предназначено для размещения легковых автомобилей с применением подъемных устройств разных типов
            </div>
            <div className='section-info'>
              <div>Типы парковочных систем</div>
              <ul className='section-info__lists'>
                <li>Парковка лифтовая ПЛ-25 (башенного типа)</li>
                <li>Парковка роторная ПР-10, ПР-12</li>
                <li>Парковка зависимого типа на два автомобиля</li>
                <li>Независимая трехъярустная подземная парковка</li>
                <li>Парковка роторная для автомобилей класса SUV ПРД-10</li>
              </ul>
            </div>
          </section>
          <ContactForm />
        </div>
      </div>
      {selectedIndex !== null && (
        <div className="image-modal" onClick={closeImage}>
          <div className="image-modal__content" onClick={(e) => e.stopPropagation()}>
            <Swiper
              initialSlide={selectedIndex}
              slidesPerView={1}
              modules={[Navigation]}
            >
              {parkingData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <img src={item.imgName} alt="fullscreen parking" />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="image-modal__close" onClick={closeImage}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}
