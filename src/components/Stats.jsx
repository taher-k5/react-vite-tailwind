import React from 'react'
import {stats} from '../constant'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexStart} ss:flex-row flex-col flex-wrap mb-10 md:mb-40`}>
      {stats.map(((item, index) => (
        <div key={index}>
          <div className='flex'>
            <h1 className='font-poppins ss:text-[40px] text-[25px] font-semibold leading-[53px] text-white mr-5'>
              {item.value}
              <span className='text-gradient ss:text-[20px] text-[15px] font-normal font-poppins ml-10'>{item.title}</span>
            </h1>
            {stats.length - 1 !== index ? 
            <div className={`hidden ss:flex mx-10 ${styles.flexCenter}`}>
              <span className='border-r-2 h-[15px]'></span>
            </div> : ''}
          </div>
        </div>
      )))}
    </section>
  )
}

export default Stats