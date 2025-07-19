import React, { useState } from 'react';
import './contactForm.css';
import { toast } from 'react-toastify';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (value.trim().length < 2) return 'Введите имя (минимум 2 символа)';
        break;
      case 'phone': {
        const digits = value.replace(/\D/g, '');
        if (digits.length < 10 || digits.length > 15)
          return 'Введите корректный номер телефона';
        break;
      }
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Введите корректный email';
        break;
      case 'message':
        if (!value.trim()) return 'Сообщение не должно быть пустым';
        break;
      default:
        return '';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldValue = value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue),
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldValue = value;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue),
    }));
  };

  const isFormValid = () => {
    return Object.values(errors).every((e) => !e) && Object.values(formData).every((v) => v && v.toString().trim().length > 0);
  };

  const validateAllFields = () => {
    const newErrors = {};
    for (const field in formData) {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valid = validateAllFields();
    if (!valid) return;

    setIsSending(true);

    try {
      const payload = new FormData();
      for (const key in formData) {
        if (key !== 'consent') payload.append(key, formData[key]);
      }

      const response = await fetch('/send.php', {
        method: 'POST',
        body: payload,
      });

      const result = await response.text();
      if (result === 'success') {
        toast.success('Ваш запрос успешно отправлен!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        setErrors({});
      } else {
        toast.error('Ошибка при отправке. Попробуйте позже.');
      }
    } catch (err) {
      toast.error('Ошибка соединения с сервером.');
    } finally {
      setIsSending(false);
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
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {errors.name && <span className="form__error-active">{errors.name}</span>}
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? 'form__type-input-error' : ''}
          />

          <div className="contact-row">
            <div className='contact-row__item'>
              {errors.phone && <span className="form__error-active">{errors.phone}</span>}
              <input
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone ? 'form__type-input-error' : ''}
              />
            </div>
            <div className='contact-row__item'>
              {errors.email && <span className="form__error-active">{errors.email}</span>}
              <input
                type="email"
                name="email"
                placeholder="Почта"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? 'form__type-input-error' : ''}
              />
            </div>
          </div>

          {errors.message && <span className="form__error-active">{errors.message}</span>}
          <textarea
            name="message"
            placeholder="Опишите ваш вопрос, задачу или предложение"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.message ? 'form__type-input-error' : ''}
          />

          <p className="consent-text">
            Нажимая кнопку "Отправить", я даю согласие на обработку персональных данных <br />
            с целью улучшения качества обслуживания
          </p>

          <button
            type="submit"
            className={`primary-button ${!isFormValid() ? 'button-inactive' : ''}`}
            disabled={isSending}
            aria-disabled={!isFormValid()}
          >
            {isSending ? 'Отправка...' : 'Отправить запрос'}
          </button>

        </form>
      </div>
    </section>
  );
}

export default ContactForm;
