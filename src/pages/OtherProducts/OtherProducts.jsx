import React from 'react'
import './otherProducts.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import CatalogPreview from '../../components/CatalogPreview/CatalogPreview'

export default function OtherProducts() {
  return (
    <div className='other-products'>
      <div className="container">
        <div className="other-products__inner">
          <CatalogPreview />
          <h3 className='block-title'>Другая продукция</h3>

          <section className="other-products-info">
            <div className='section-info'>
              <div>Мы поставляем:</div>
              <ul className='section-info__lists'>
                <li>Оборудование для маломобильных групп населения</li>
                <li>Оборудование для строительства</li>
                <li>Элекстроакустические приборы</li>
                <li>Техника для сельского хозяйства</li>
                <li>Измельчители мелколесья</li>
                <li>Потребительские товары</li>
              </ul>
            </div>
            <div className="section-description">
              Для ознакомления с полным каталогом поставляемой продукции перейдите на сайт поставщика или заполните форму для связи с менеджером.
            </div>
          </section>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
