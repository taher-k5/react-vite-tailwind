import React from 'react'
import {stats} from '../constant'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexStart} flex-row flex-wrap mb-6 md:mb-20`}>
      {stats.map(((item, index) => (
        <div key={index}>
          <div className='flex'>
            <p className='font-poppins text-[40px] font-semibold leading-[53px] text-white mr-5'>
              {item.value}
              <span className='text-gradient text-[20px] font-normal font-poppins ml-10'>{item.title}</span>
            </p>
            {stats.length - 1 !== index ? 
            <div className={`h- mx-10 ${styles.flexCenter}`}>
              <span className='border-r-2 h-[15px]'></span>
            </div> : ''}
          </div>
        </div>
      )))}
    </section>
  )
}

export default Stats