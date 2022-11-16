import React from 'react'
import comp from '../../assets/services/Nashi/award 1 (12).svg'
import masseg from '../../assets/services/Nashi/award 1 (14).svg'
import telefon from '../../assets/services/Nashi/award 1 (15).svg'
import graph from '../../assets/services/Nashi/award 1 (16).svg'

const Nashi = () => {
  return (
    <section className='Nashi'>  
       <div className='Nashi_inner'>
            <h1 className='Nashi_Title'>Наши преимущества</h1>
            <div className='Text_content'>
                <div className='Text_content1' >
                    <div className='Nashi_cards'>
                        <img className='img' src={comp} alt='' />
                        <p className='Nashi_cards_text1'>Сделаем адаптивный дизайн, под любой вид устройств</p>
                    </div>
                    <div className='Nashi_cards'>
                        <img className='img' src={masseg} alt='' />
                        <p className='Nashi_cards_text2'>Установим на сайт счетчики аналитики и настроим возможность отслеживать результаты прямо с вашего мобильного телефона</p>
                    </div>
                </div>
                <div className='Text_content1'>
                    <div className='Nashi_cards'>
                        <img className='img' src={telefon} alt='' />
                        <p className='Nashi_cards_text3'>Настроим все возможные способы обратной связи. Заявки на почту, подключим онлайн консультанта, настроим телефонный звон с сайта, подключим Whatsapp к сайту</p>
                    </div>
                    <div className='Nashi_cards'>
                        <img className='img' src={graph} alt='' />
                        <p className='Nashi_cards_text4'>Проведем анализ вашей сферы и конкурентов, предложим лучшие инструменты для продвижения в интернете</p>
                    </div>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Nashi