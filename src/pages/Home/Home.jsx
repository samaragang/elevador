import React from 'react'
import './home.css'
import CatalogPreview from "../../components/CatalogPreview/CatalogPreview";
import ContactForm from "../../components/ContactForm/ContactForm";
import logo from "/logo-big.png"

export default function Home() {
  return (
    <main className='home'>
      <div className='intro'>
        <img src={logo} alt="elevador" />
      </div>
      <div className="container">
        <div className="home__inner">
          <section className="hero">
            <div className="hero-content">
              <h2 className='hero-content__title'>
                <strong>ELEVADOR</strong> — лучшее решение для любой задумки
              </h2>
              <div className='hero-content__description'>
                Мы уважаем наших клиентов, поэтому с трепетом относимся к каждой детали, стараемся подобрать лучший вариант и сделать все в кратчайшие сроки
              </div>
            </div>
          </section>
          <CatalogPreview />
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
