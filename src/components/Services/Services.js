import React from 'react'
import { servicesdata } from '../../scss/servicesdata'

const Services = () => {
  return (
    <section className='services' >
        <div className='conteiner'>
            <h2 className='services_title'>Что мы предлагаем</h2>
            <div className='services_row'>
            {
                servicesdata.map((item) => (
                    <div className='services_card'>
                        <img src={item.icone} alt=''/>
                        <h3 className='services_card-title'>{item.text}</h3>
                    </div>
                ))
            }
            <div className='services_card' ></div>
            <div className='services_card'></div>
            <div className='services_card'>
                <button type='button'>Подробнее</button>
            </div>


            </div>
          

        </div>

    </section>
  )
}

export default Services