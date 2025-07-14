import React from 'react'
import './contacts.css'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function Contacts() {
  return (
    <div className='contacts'>
      <div className="container">
        <div className="contacts__inner">
          <h3 className='block-title'>Контакты</h3>
          <div className='contacts-info'>
            <div>
              <span>Телефон:</span> +7 (977) 666-63-77
            </div>
            <div>
              <span>Почта:</span> elevador@gmail.com
            </div>
            <div>
              <span>Режим работы:</span> 10:00-22:00, без выходных
            </div>
            <div>
              Связаться с нами можно по номеру телефона или по почте.<br />
              Также менеджер отвечает на сообщения в Telegram и WhatsApp по номеру +7 (977) 666-63-77.<br />
              Для предоставления развернутого ответа на интересующий вопрос, отправьте запрос на звонок, описав Ваш <br /> вопрос или проблему в соответствующем поле.
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
