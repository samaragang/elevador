import React from 'react';
import './contactForm.css';

function ContactForm() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact__inner">
          <h2 className="section-title">Связаться с нами</h2>
          <p className="contact-description">
            Позвоните нам по номеру +7(977)666-63-77 или отправьте запрос,<br />
            и наш менеджер свяжется с Вами в ближайшее время
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Ваше имя" required />
            <div className="contact-row">
              <input type="tel" placeholder="Номер телефона" required />
              <input type="email" placeholder="Почта" required />
            </div>
            <textarea placeholder="Опишите ваш вопрос, задачу или предложение" required />

            <p className="consent-text">
              Нажимая кнопку "Отправить", я даю согласие на обработку персональных данных <br />
              с целью улучшения качества обслуживания
            </p>

            <button type="submit" className="primary-button">Отправить запрос</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
