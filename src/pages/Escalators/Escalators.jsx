import React from 'react'
import './escalators.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import CatalogPreview from '../../components/CatalogPreview/CatalogPreview'
import imgEscalator from '/src/assets/images/escalator-white.png';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import InfoListBlock from '../../components/InfoListBlock/InfoListBlock';

export default function Escalators() {
  return (
    <main className='page page--escalators'>
      <div className="container">
        <div className="escalators__inner">
          <CatalogPreview />
          <h2>Эскалаторы и траволаторы</h2>
          <section className="escalators-info">
            <div>
              <SectionHeader
                title='Эскалаторы'
                description='Наши поэтажные эскалаторы отвечают мировым тенденциям мировой индустрии, являются безопасными, надежными и экономичными в эксплуатации.'
              />
              <InfoListBlock
                title='Преимущества эскалаторов ОАО «Могилевлифтмаш»'
                items={[
                  'Встроенный привод не требует специальных помещений',
                  'Шумовые характеристики снижены до уровня ведущих европейских производителей',
                  'Все детали внешней отделки изготовлены из нержавеющей стали, современный дизайн',
                  'Низкие затраты на содержание в течении  всего жизненного цикла',
                  'Надежность и возможность круглосуточной работы',
                  'Минимальное  воздействие на окружающую среду',
                  'Удобство и безопасность пассажиров'
                ]}
              />
            </div>
            <div>
              <img src={imgEscalator} alt="imgEscalator" />
            </div>
          </section>
          <section>
            <SectionHeader
              title='Траволаторы'
              description='Наши траволаторы — движущаяся бесступенчатая полоса, которая позволяет ускорить или облегчить передвижение пешеходов — отвечают всем современным тенденциям, являются экономичными, безопасными и надежными.'
            />
          </section>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
