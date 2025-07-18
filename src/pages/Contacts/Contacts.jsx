import React from 'react'
import './contacts.css'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function Contacts() {
  return (
    <main className='page page--contacts'>
      <div className="container">
        <div className="contacts__inner">
          <h2>Контакты</h2>
          <div className='contacts-info'>
            <div>
              <span>Телефон:</span> +7 (977) 666-63-77
            </div>
            <div>
              <span>Почта:</span> elevador77@yandex.ru
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
    </main>
  )
}
