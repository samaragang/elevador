import React from 'react';
import './fullCatalogBox.css';

export default function FullCatalogBox({ title, description, buttons }) {
  return (
    <div className='full-catalog'>
      <div className="container">
        <div className='full-catalog__inner'>
          <h3>{title}</h3>
          <div className="full-catalog__description">
            {description}, подготовленной нашими поставщиками
          </div>
          <div className='full-catalog__buttons'>
            {buttons.map((btn, i) => (
              <button
                key={i}
                className='primary-button'
                onClick={() =>
                  window.open(`pdf/${btn}.pdf`, '_blank')
                }
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
