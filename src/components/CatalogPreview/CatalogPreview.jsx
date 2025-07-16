// import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './catalogPreview.css';
import { Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import imgLift from '/src/assets/images/lift.png';
import imgEscalator from '/src/assets/images/escalator.png';
import imgParking from '/src/assets/images/parking.png';
import imgConstruction from '/src/assets/images/construction.png';

const catalogData = [
  {
    title: 'Лифты',
    desc: 'Пассажирские, грузовые и больничные лифты, другие услуги по установке, регулированию и ремонту',
    img: imgLift,
    link: "/lifts"
  },
  {
    title: 'Эскалаторы и траволаторы',
    desc: 'Подъемные механизмы и ленты',
    img: imgEscalator,
    link: "/escalators"
  },
  {
    title: 'Парковочные системы',
    desc: 'Автомобальные парковочные системы',
    img: imgParking,
    link: "/parking"
  },
  {
    title: 'Объекты стройки',
    desc: 'Автомобальные парковочные системы',
    img: imgConstruction,
    link: "/other-products"
  },
];

export default function CatalogPreview() {
  return (
    <section className="catalog">
      <h3 className='block-title'>Каталог</h3>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        // loop={true}
        breakpoints={{
          480: {
            spaceBetween: 5,
          },
          1200: {
            spaceBetween: 10,
          }

        }}
        modules={[Navigation]}
      >

        {catalogData.map((item, index) => (
          <SwiperSlide className="catalog-item" key={index}>
            <NavLink className="catalog-item__content" to={item.link}>
              <div className="catalog-item__image">
                <img src={item.img} alt={item.title} />
              </div>
              <h4 className="catalog-item__title">{item.title}</h4>
              <p className="catalog-item__description">{item.desc}</p>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
