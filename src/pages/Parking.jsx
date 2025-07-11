import React from 'react'
import './parking.css'
import ContactForm from '../components/ContactForm/ContactForm'
import CatalogPreview from '../components/CatalogPreview/CatalogPreview'
import FullCatalogBox from '../components/FullCatalogBox/FullCatalogBox'
import imgParking from '/src/assets/images/parking-white.png';

export default function Parking() {
  return (
    <div className='parking'>
      <div className="container">
        <div className="parking__inner">
          <CatalogPreview />
          <h3 className='block-title'>Автомобильные <br />парковочные системы</h3>
          <FullCatalogBox
            title='Полный каталог парковочных систем'
            description='С полным каталогом автомобильных парковочных система можно ознакомиться в презентации'
            buttons={['Каталог парковочных систем']}
          />
          <section className="parking-info">
            <div>
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
            </div>
            <div>
              <img src={imgParking} alt="imgEscalator" />
            </div>
          </section>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
