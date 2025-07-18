import React from 'react'
import './otherProducts.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import CatalogPreview from '../../components/CatalogPreview/CatalogPreview'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import InfoListBlock from '../../components/InfoListBlock/InfoListBlock';

export default function OtherProducts() {
  return (
    <main className='page page--other-products'>
      <div className="container">
        <div className="other-products__inner">
          <CatalogPreview />
          <h2>Другая продукция</h2>
          <section>
            <InfoListBlock
              title='Мы поставляем:'
              items={[
                'Оборудование для маломобильных групп населения',
                'Оборудование для строительства',
                'Элекстроакустические приборы',
                'Техника для сельского хозяйства',
                'Измельчители мелколесья',
                'Потребительские товары'
              ]}
            />
            <SectionHeader
              description='Для ознакомления с полным каталогом поставляемой продукции перейдите на сайт поставщика или заполните форму для связи с менеджером.'
            />
          </section>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
