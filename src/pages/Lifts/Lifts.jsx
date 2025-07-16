import React, { useEffect, useState } from 'react';
import './lifts.css'
import CatalogPreview from '../../components/CatalogPreview/CatalogPreview'
import FullCatalogBox from '../../components/FullCatalogBox/FullCatalogBox'
import imgLift1 from '/src/assets/images/lift1.jpg';
import imgLift2 from '/src/assets/images/lift2.jpg';
import imgLift3 from '/src/assets/images/lift3.jpg';
import imgLift4 from '/src/assets/images/lift4.jpg';
import imgLift5 from '/src/assets/images/lift5.jpg';
import ContactForm from "../../components/ContactForm/ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const liftsData = [
  {
    imgName: imgLift1
  },
  {
    imgName: imgLift2
  },
  {
    imgName: imgLift3
  },
  {
    imgName: imgLift4
  },
  {
    imgName: imgLift5
  },
]

export default function Lifts() {
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
    <div className='lifts'>
      <div className="container">
        <div className='lifts__inner'>
          <CatalogPreview />
          <h3 className='block-title'>Лифты</h3>
          <FullCatalogBox
            title='Полный каталог лифтов'
            description='С полным каталогом лифтов можно ознакомиться в презентации'
            buttons={['Общий каталог лифтов', 'Каталог лифтов MOVEL']}
          />
          <section className="passenger-lifts">
            <h3 className="section-title">Пассажирские лифты</h3>
            <div className="section-description">
              Пассажирские лифты предназначены для установки в жилых домах, общественных и административных зданиях, гостиницах, банках и офисах.
            </div>
            <div className='section-info'>
              <div>Наши лифты имеют:</div>
              <ul className='section-info__lists'>
                <li>Плавный ход и повышенную точность остановки</li>
                <li>Комфортабельную кабину и пониженную шумность</li>
                <li>Антивандальные панели управления и вызывные посты с подсветкой кнопок</li>
                <li>Индикаторы направления движения и положения кабины</li>
                <li>Микропроцессорную станцию управления</li>
                <li>Частотное регулирование главного привода и привода дверей кабины</li>
                <li>Светодиодное освещение</li>
                <li>Индикация перегрузки кабины</li>
              </ul>
            </div>
            <div className='passenger-lifts__cases'>
              <div className='passenger-lifts__cases-title'>
                Для ознакомления с моделями лифтов можно воспользоваться <a href="https://www.liftmach.by/catalog/passazhirskie-lifty/" target="_blank" rel="noopener noreferrer">конфигуратором</a></div>
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
                {liftsData.map((item, index) => (
                  <SwiperSlide key={index} className='lift-swiper-item'>
                    <img
                      src={item.imgName}
                      alt="lift"
                      onClick={() => openImage(index)}
                      style={{ cursor: 'pointer' }}
                    />


                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
          <section className="cargo-lifts">
            <h3 className="section-title">Грузовые лифты</h3>
            <div className="section-description">
              Грузовые лифты предназначены для перевозки грузов с проводником и без него. Устанавливаются в общественных зданиях и на промышленных предприятиях (складах, магазинах, ресторанах и пр.).
            </div>
            <div className='section-info'>
              <div>Указанные грузовые лифты:</div>
              <ul className='section-info__lists'>
                <li>Изготавливаются в обычном исполнении, выжимные и с монорельсом</li>
                <li>Просты в монтаже и обслуживании</li>
                <li>Имеют совершенную микропроцессорную станцию управления</li>
                <li>Оснащены кабиной повышенной прочности</li>
                <li>Двери кабины - сплошные раздвижные, двери шахты - распашные</li>
              </ul>
            </div>
          </section>
          <section className='hospital-lifts'>
            <h3 className="section-title">Больничные лифты</h3>
            <div className="section-description">
              Больничные лифты устанавливаются в лечебно-профилактических учреждениях. Они позволяют перевозить больных на каталке. Изготавливаются с проходной и непроходной кабиной.
            </div>
          </section>
          <section className='other-details'>
            <h3 className="section-title">Другие детали и виды работ</h3>
            <div className='section-info'>
              <ul className='section-info__lists'>
                <li>Работы по модернизации лифтов, отработавших нормативный срок службы</li>
                <li>Поставка лифтовых лебедок, камер видеонаблюдения</li>
                <li>Смарт-технологии для лифтов</li>
                <li>UV-печать на лифтовых кабинах</li>
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
              {liftsData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <img src={item.imgName} alt="fullscreen lift" />
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
