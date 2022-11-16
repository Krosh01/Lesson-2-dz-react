import React from 'react'
import Burger from '../../assets/services/Header/Vector (1).svg'
import Frame from '../../assets/services/Header/Frame 1543.svg'
import arrow from '../../assets/services/Header/Vector (2).svg'
import backgoundHeader from '../../assets/services/Header/Rectangle 1.png'
const Header = () => {
  return (
    <header  className='Header'>  
      <div className='Header_inner'>
        <nav className='Header_nav'>
          <p className='Header_nav_logo'>
          <img src={Frame} alt=''/>
            Digital flow
            </p>
          <img src={Burger} alt=''/>
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
     
    </header>
  )
}
export default Header