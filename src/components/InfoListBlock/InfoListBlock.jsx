import React from 'react'
import './infoListBlock.css'

export default function InfoListBlock({ title, items }) {
  return (
    <div className='info-list-block'>
      {title && <div className="info-list-block__title">{title}</div>}
      <ul className="info-list-block__list">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
