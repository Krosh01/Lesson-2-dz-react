import React from 'react'
import leftbg from '../../assets/services/Home/Rectangle 2.png'
import fullelipse from '../../assets/services/Home/Ellipse 1.svg'
import emptyelipse from '../../assets/services/Home/Ellipse 2.svg'

const Home = () => {
  return (
    <section className='Home'>
        <div className='Home_inner'>
            <div className='Home_inner_left'>
                <img className='Header_inner_leftbgimg' src={leftbg} alt=''/>
            </div>
            <div className='Home_inner_right'>
                <div className='Header_inner_main_text'>
                    <h2 className='Header_inner_Title'>О компании</h2>
                    <p className='Header_inner_SubTitles1'>Мы диджитал агентст
                    во занимаемся полным циклом продвижения компаний в интернете.
                    </p>
                    <p className='Header_inner_SubTitles2'>Разработка 
                    сайтов – Сделаем уникальный дизайн согласно вашему 
                    фирменному стилю. Напишем чистый код, без использования
                    конструкторов.
                    </p>
                    <p className='Header_inner_SubTitles3'>Продвижение – 
                    поможем вам быстро добиться желаемого результата,
                    обеспечим постоянный приток новых заявок.
                    </p>
                </div> 
                <div className='Header_inner_scroll_imgs'>
                    <img  className='Header_inner_scroll_img' src={fullelipse} alt=''/>
                    <img  className='Header_inner_scroll_img' src={emptyelipse} alt=''/>
                    <img  className='Header_inner_scroll_img' src={fullelipse} alt=''/>
                    <img  className='Header_inner_scroll_img' src={fullelipse} alt=''/>
                    <img  className='Header_inner_scroll_img' src={fullelipse} alt=''/>
                    <img  className='Header_inner_scroll_img' src={fullelipse} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home