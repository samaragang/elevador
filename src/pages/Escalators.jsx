import React from 'react'
import './escalators.css'
import ContactForm from '../components/ContactForm/ContactForm'
import CatalogPreview from '../components/CatalogPreview/CatalogPreview'
import FullCatalogBox from '../components/FullCatalogBox/FullCatalogBox'
import imgEscalator from '/src/assets/images/escalator-white.png';

export default function Escalators() {
  return (
    <div className='escalators'>
      <div className="container">
        <div className="escalators__inner">
          <CatalogPreview />
          <h3 className='block-title'>Эскалаторы и траволаторы</h3>
          <FullCatalogBox
            title='Полный каталог эскалаторов и траволаторов'
            description='С полным каталогом эскалаторов и траволаторов можно ознакомиться в презентации'
            buttons={['Каталог эскалаторов и траволаторов']}
          />
          <section className="escalators-info">
            <div>
              <h3 className="section-title">Эскалаторы</h3>
              <div className="section-description">
                Наши поэтажные эскалаторы отвечают мировым тенденциям мировой индустрии, являются безопасными, надежными и экономичными
                в эксплуатации.
              </div>
              <div className='section-info'>
                <div>Преимущества эскалаторов ОАО «Могилевлифтмаш»</div>
                <ul className='section-info__lists'>
                  <li> Встроенный привод не требует специальных помещений</li>
                  <li>Шумовые характеристики снижены до уровня ведущих европейских производителей</li>
                  <li>Все детали внешней отделки изготовлены из нержавеющей стали, современный дизайн</li>
                  <li>Низкие затраты на содержание в течении  всего жизненного цикла</li>
                  <li>Надежность и возможность круглосуточной работы</li>
                  <li>Минимальное  воздействие на окружающую среду</li>
                  <li>Удобство и безопасность пассажиров</li>
                </ul>
              </div>
            </div>
            <div>
              <img src={imgEscalator} alt="imgEscalator" />
            </div>
          </section>

          <section className="cargo-lifts">
            <h3 className="section-title">Траволаторы</h3>
            <div className="section-description">
              Наши траволаторы — движущаяся бесступенчатая полоса, которая позволяет ускорить или облегчить передвижение <br /> пешеходов — отвечают всем современным тенденциям, являются экономичными, безопасными и надежными.
            </div>
          </section>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
