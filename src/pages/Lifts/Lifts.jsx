import React from 'react';
import './lifts.css'
import InfoListBlock from '../../components/InfoListBlock/InfoListBlock';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CatalogPreview from '../../components/CatalogPreview/CatalogPreview'
import FullCatalogBox from '../../components/FullCatalogBox/FullCatalogBox'
import imgLift1 from '/src/assets/images/lift1.jpg';
import imgLift2 from '/src/assets/images/lift2.jpg';
import imgLift3 from '/src/assets/images/lift3.jpg';
import imgLift4 from '/src/assets/images/lift4.jpg';
import imgLift5 from '/src/assets/images/lift5.jpg';
import ContactForm from "../../components/ContactForm/ContactForm";
import ImageGalleryWithModal from '../../components/ImageGalleryWithModal/ImageGalleryWithModal';

const liftsData = [imgLift1, imgLift2, imgLift3, imgLift4, imgLift5]

export default function Lifts() {
  return (
    <main className='page page--lifts'>
      <div className="container">
        <div className='lifts__inner'>
          <CatalogPreview />
          <h2>Лифты</h2>
          <FullCatalogBox
            title='Полный каталог лифтов'
            description='С полным каталогом лифтов можно ознакомиться в презентации'
            buttons={['Общий каталог лифтов', 'Каталог лифтов MOVEL']}
          />
          <section className="passenger-lifts">
            <SectionHeader
              title="Пассажирские лифты"
              description="Пассажирские лифты предназначены для установки в жилых домах, общественных и административных зданиях, гостиницах, банках и офисах."
            />
            <InfoListBlock
              title='Наши лифты имеют:'
              items={[
                'Плавный ход и повышенную точность остановки',
                'Комфортабельную кабину и пониженную шумность',
                'Антивандальные панели управления и вызывные посты с подсветкой кнопок',
                'Индикаторы направления движения и положения кабины',
                'Микропроцессорную станцию управления',
                'Частотное регулирование главного привода и привода дверей кабины',
                'Светодиодное освещение',
                'Индикация перегрузки кабины',
              ]}
            />
            <div className='passenger-lifts__cases'>
              <div className='passenger-lifts__cases-title'>
                Для ознакомления с моделями лифтов можно воспользоваться <a href="https://www.liftmach.by/catalog/passazhirskie-lifty/" target="_blank" rel="noopener noreferrer">конфигуратором</a></div>
              <ImageGalleryWithModal images={liftsData} />
            </div>
          </section>
          <section>
            <SectionHeader
              title='Грузовые лифты'
              description='Грузовые лифты предназначены для перевозки грузов с проводником и без него. Устанавливаются в общественных зданиях и на промышленных предприятиях (складах, магазинах, ресторанах и пр.).'
            />
            <InfoListBlock
              title='Указанные грузовые лифты:'
              items={[
                'Изготавливаются в обычном исполнении, выжимные и с монорельсом',
                'Просты в монтаже и обслуживании',
                'Имеют совершенную микропроцессорную станцию управления',
                'Оснащены кабиной повышенной прочности',
                'Двери кабины - сплошные раздвижные, двери шахты - распашные'
              ]}
            />
          </section>
          <section>
            <SectionHeader
              title='Больничные лифты'
              description=' Больничные лифты устанавливаются в лечебно-профилактических учреждениях. Они позволяют перевозить больных на каталке. Изготавливаются с проходной и непроходной кабиной.'
            />
          </section>
          <section>
            <SectionHeader
              title='Другие детали и виды работ'
            />
            <InfoListBlock
              items={[
                'Работы по модернизации лифтов, отработавших нормативный срок службы',
                'Поставка лифтовых лебедок, камер видеонаблюдения',
                'Смарт-технологии для лифтов',
                'UV-печать на лифтовых кабинах'
              ]}
            />
          </section>
          <ContactForm />
        </div>
      </div>

    </main>
  )
}
