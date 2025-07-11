import React from 'react'
import './fullCatalogBox.css'

export default function FullCatalogBox({ title, description, buttons }) {
  return (
    <div className='full-catalog'>
      <div className="container">
        <div className='full-catalog__inner'>
          <h3 className='section-title'>{title}</h3>
          <div className="section-description">
            {description}, <br />подготовленной нашими поставщиками
          </div>
          <div className='full-catalog__buttons'>
            {buttons.map((btn => (
              <button className='primary-button'>
                {btn}
              </button>
            )))}
          </div>
        </div>
      </div>
    </div>
  )
}
