import React from 'react';
import './footer.css';
import Inst from '/src/assets/icons/inst.svg'
import Tg from '/src/assets/icons/tg.svg'
import Viber from '/src/assets/icons/viber.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer-left">
            <div className='footer-left__logo'>ELEVADOR</div>
            <div className="footer-left__nav">
              <button className='footer-left__nav-item'>О нас</button>
              <button className='footer-left__nav-item'>Каталог</button>
              <button className='footer-left__nav-item'>Контакты</button>
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
            <div>elevador@gmail.com</div>
          </div>
        </div>
      </div>
      <div className='copy-rigth'>© 2025 ELEVADOR</div>
    </footer>
  );
}

export default Footer;
