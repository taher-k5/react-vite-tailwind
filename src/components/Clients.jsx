import React from 'react'
import { clients } from '../constant'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexStart} justify-evenly items-center mb-10`}>
      {clients.map((item, index) => (
        <div key={index} className='items-end px-5'>
          <img src={item.logo} alt={item.id} className='w-[192px] h-full items-end' />
        </div>
      ))}
    </section>
  )
}

export default Clients