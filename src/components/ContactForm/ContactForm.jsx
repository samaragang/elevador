import React from 'react';
import './contactForm.css';
import { toast } from 'react-toastify';

function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Простая валидация
    if (!name || !phone || !email || !message) {
      toast.error('Пожалуйста, заполните все поля.');
      return;
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Пожалуйста, введите корректный email.');
      return;
    }

    // Проверка телефона (только цифры, от 10 до 15 символов)
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      toast.error('Пожалуйста, введите корректный номер телефона.');
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch('/send.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();

      if (result === 'success') {
        toast.success('Ваш запрос успешно отправлен!');
        form.reset();
      } else {
        toast.error('Ошибка при отправке. Попробуйте позже.');
      }
    } catch (error) {
      toast.error('Ошибка соединения с сервером.');
    }
  };



  return (
    <section className="contact-section">
      <div className="contact__inner">
        <h2 className="section-title">Связаться с нами</h2>
        <p className="contact-description">
          Позвоните нам по номеру +7(977)666-63-77 или отправьте запрос,<br />
          и наш менеджер свяжется с Вами в ближайшее время
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Ваше имя" />
          <div className="contact-row">
            <input type="tel" name="phone" placeholder="Номер телефона" />
            <input type="email" name="email" placeholder="Почта" />
          </div>
          <textarea name="message" placeholder="Опишите ваш вопрос, задачу или предложение" />
          <p className="consent-text">
            Нажимая кнопку "Отправить", я даю согласие на обработку персональных данных <br />
            с целью улучшения качества обслуживания
          </p>
          <button type="submit" className="primary-button">Отправить запрос</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
