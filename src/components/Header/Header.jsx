import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <NavLink to='/elevador' className='header__logo'>
            <img src="logo.svg" alt="elevador" />
          </NavLink>
          <nav className='header__nav'>
            <button className='header__nav-item'>
              О нас
            </button>
            <button className='header__nav-item'>
              Каталог
            </button>
            <NavLink to='/contacts' className='header__nav-item'>
              Контакты
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
