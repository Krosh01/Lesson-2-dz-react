import React from 'react'
import fullelipse from '../../assets/services/Home/Ellipse 1.svg'
import emptyelipse from '../../assets/services/Home/Ellipse 2.svg'
import Imgbg from '../../assets/services/Portfolio/f_9936163de18b3599 1.png'
import arrow from '../../assets/services/Header/Vector (2).svg'


const Portfolio = () => {
  return (
    <section className='Portfolio'>
        <div className='Portfolio_inner'>
            <div className='Portfolio_Title'>Портофолио</div>
            <div className='Portfolio_home'>
                <div className='Portfolio_center'>
                    <img className='Portfolio_Img_bg' src={Imgbg} alt/> 
                    <div className='BUtton2'>
                        <p  className='Button_text2'>Перейти на сайт</p>
                        <img  className='Portfolio_img_arrow' src={arrow} alt=''/>
                    </div>
                </div>
                <div className='Portfolio_img_scroll'>
                    <img  className='Portfolio_inner_scroll_img' src={fullelipse} alt=''/>
                    <img  className='Portfolio_inner_scroll_img' src={emptyelipse} alt=''/>
                    <img  className='Portfolio_inner_scroll_img' src={fullelipse} alt=''/>
                    <img  className='Portfolio_inner_scroll_img' src={fullelipse} alt=''/>
                    <img  className='Portfolio_inner_scroll_img' src={fullelipse} alt=''/>
                    <img  className='Portfolio_inner_scroll_img' src={fullelipse} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio