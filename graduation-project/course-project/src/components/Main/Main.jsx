import React from 'react'
import { Header } from '../Header/Header'
// import { MainContent } from '../MainContent/MainContent'
import { Footer } from '../Footer/Footer'
import './Main.scss'
import { Outlet } from 'react-router-dom'

export function Main() {


  return (
    <div className='main'>
      <div className='header'>
        <Header />
      </div>


      <div className='main-content'>
        <Outlet />
      </div>


      <div className='footer'>
        {/* <Footer /> */}
      </div>
    </div>
  )
}
