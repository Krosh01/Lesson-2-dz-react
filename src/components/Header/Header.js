import React, { useState } from 'react'
import Burger from '../../assets/services/Header/Vector (1).svg'
import Frame from '../../assets/services/Header/Frame 1543.svg'
import arrow from '../../assets/services/Header/Vector (2).svg'

import Telegram from '../../assets/services/Footer/Frame 22.svg'
import Vcontacte from '../../assets/services/Footer/Frame 23.svg'
import Instagram from '../../assets/services/Footer/Frame 24.svg'
import Gmail from '../../assets/services/Footer/Frame 25.svg'
import Contacts from '../../assets/services/Footer/Frame 26.svg'


const Header = () => {
  
  return (
    <header  className='Header'>  
      <div className='Header_inner'>
        <nav className='Header_nav'>
          <p className='Header_nav_logo'>
          <img src={Frame} alt=''/>
            Digital flow
            </p>
            <div className='Burger_menu'>
                <img src={Burger} alt=''/>
            </div>
        </nav>
        <div className='Header_main'>
        <div className='Title'>web applications</div>
        <div className='SubTitle'>Повседневная практика.</div>
        <div className='Button'>
          <p className='button_text'>Спец предложение</p>
          <img src={arrow} alt=''/>
        </div>
        </div>
      </div>
                  <div className='overlay' >
                      <div className='overlay_row'>
                        <div className='ovrelay_closer'>
                           
                        </div>
                        <ul className='overlay_nav' >
                          <li className='overlay_ul_li'>Главная</li>
                          <li className='overlay_ul_li'>О компании</li>
                          <li className='overlay_ul_li'>Портфолио</li>
                          <li className='overlay_ul_li'>Что мы предлагаем</li>
                          <li className='overlay_ul_li'>Специальное предложение </li>
                        </ul>
                        <div className='overlay_button' >
                          <p className='Overlay_button_text'>Оставить заявку</p>
                          <img src={arrow} alt=''/>
                        </div>
                        <div className='overlay_apps'>
                            <img src={Telegram} alt='/'/>
                            <img src={Vcontacte} alt='/'/>
                            <img src={Instagram} alt='/'/>
                            <img src={Gmail} alt='/'/>
                            <img src={Contacts} alt='/'/>
                        </div>
                      </div>
                  </div>
      
     
    </header>
    
  )
}
export default Header


