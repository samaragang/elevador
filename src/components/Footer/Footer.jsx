import React from 'react';
import './footer.css';
import Inst from '/src/assets/icons/inst.svg'
import Tg from '/src/assets/icons/tg.svg'
import Viber from '/src/assets/icons/viber.svg'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer-left">
            <NavLink to='/' className='footer-left__logo'>ELEVADOR </NavLink>
            <div className="footer-left__nav">
              <NavLink to='/lifts' className='footer-left__nav-item'>
                Каталог
              </NavLink>
              <NavLink to='/contacts' className='footer-left__nav-item'>
                Контакты
              </NavLink>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-right__social">
              <button className="footer-right__social-item">
                <img src={Inst} alt="inst" />
              </button>
              <button className="footer-right__social-item">
                <img src={Tg} alt="tg" />
              </button>
              <button className="footer-right__social-item">
                <img src={Viber} alt="viber" />
              </button>
            </div>
            <div>+7 (977) 666-63-77</div>
            <div>elevador77@yandex.ru</div>
          </div>
        </div>
      </div>
      <div className='copy-rigth'>© 2025 ELEVADOR</div>
    </footer>
  );
}

export default Footer;
