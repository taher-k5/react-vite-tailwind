import React from 'react'
import { clients } from '../constant'
import styles from '../style'

const Clients = () => {
  return (
    <section id='clients' className={`${styles.flexStart} ss:flex-row flex-col flex-wrap justify-evenly items-center ss:mb-40 mb-20`}>
      {clients.map((item, index) => (
        <div key={index} className='items-end ss:px-5 mb-5'>
          <img src={item.logo} alt={item.id} className='w-[192px] h-full items-end' />
        </div>
      ))}
    </section>
  )
}

export default Clients