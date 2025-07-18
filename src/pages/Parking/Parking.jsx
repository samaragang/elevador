import React from 'react'
import './parking.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import CatalogPreview from '../../components/CatalogPreview/CatalogPreview'
import imgParking1 from '/src/assets/images/parking3.jpg';
import imgParking2 from '/src/assets/images/parking2.jpg';
import imgParking3 from '/src/assets/images/parking1.jpg';
import InfoListBlock from '../../components/InfoListBlock/InfoListBlock';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

import ImageGalleryWithModal from '../../components/ImageGalleryWithModal/ImageGalleryWithModal';

const parkingData = [imgParking1, imgParking2, imgParking3]

export default function Parking() {
  return (
    <main className='page page--parking'>
      <div className="container">
        <div className="parking__inner">
          <CatalogPreview />
          <h2>Автомобильные <br />парковочные системы</h2>
          <ImageGalleryWithModal images={parkingData} />
          <section>
            <SectionHeader
              title='Автомобильные парковочные системы'
              description='Парковочное оборудование предназначено для размещения легковых автомобилей с применением подъемных устройств разных типов'
            />
            <InfoListBlock
              title='Типы парковочных систем:'
              items={[
                'Парковка лифтовая МАЯК-25 (башенного типа)',
                'Парковка роторная ПР-10, ПР-12',
                'Парковка зависимого типа на два автомобиля',
                'Независимая трехъярустная подземная парковка',
                'Парковка роторная для автомобилей класса SUV ПРД-10'
              ]}
            />
          </section>
          <ContactForm />
        </div>
      </div>

    </main>
  )
}
