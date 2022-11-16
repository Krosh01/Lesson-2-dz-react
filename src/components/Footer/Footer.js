import React from 'react'
import Telegram from '../../assets/services/Footer/Frame 22.svg'
import Vcontacte from '../../assets/services/Footer/Frame 23.svg'
import Instagram from '../../assets/services/Footer/Frame 24.svg'
import Gmail from '../../assets/services/Footer/Frame 25.svg'
import Contacts from '../../assets/services/Footer/Frame 26.svg'


const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer_inner'>
        <div className='Footer_Inner_Card'>
          <h2 className='Footer_title'>Пункт</h2>
          <p className='Footer_subTitle' >В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности.</p>
          <p className='Footer_sub_subtitle' >Пункт</p>
          <p className='Footer_sub_subtitle' >Пункт</p>
        </div>
        <div className='Footer_Line'></div>
        <div className='Footer_Discription'>
          <h3  className='Footer_Discription_text'>digital flow</h3>
          <div className='Footer_Img'>
            <img src={Telegram} alt='/'/>
            <img src={Vcontacte} alt='/'/>
            <img src={Instagram} alt='/'/>
            <img src={Gmail} alt='/'/>
            <img src={Contacts} alt='/'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer