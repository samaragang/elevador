import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import logo from '/logo.svg'
export default function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__inner">
          <NavLink to='/' className='header__logo'>
            <img src={logo} alt="elevador" />
          </NavLink>
          <nav className='header__nav'>
            <NavLink to='/lifts' className='header__nav-item'>
              Каталог
            </NavLink>
            <NavLink to='/contacts' className='header__nav-item'>
              Контакты
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
