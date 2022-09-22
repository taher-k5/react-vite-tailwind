import React from 'react'
import { quotes } from '../assets'
import { feedback } from '../constant'
import styles from '../style'

const Testimonials = () => {
  return (
    <section className={`mb:20`}>
      <div className={`flex justify-around flex-col md:flex-row mx-auto md:mb-20 mb-10`}>
          <h1 className={`${styles.heading2}  md:w-2/5 w-full`}>What people are saying about us</h1>
          <p className={`${styles.paragraph} md:w-1/3 w-full items-center justify-center flex`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className={`${styles.flexStart} md:flex-row flex-col items-center`}>
        {feedback.map(((item, index) => (
          <div key={index} className={`p-5 w-[370px] h-[400px] flex flex-col justify-evenly feedback-card cursor-pointer hover:rounded-xl`}>
            <img src={quotes} alt="quote" className='w-[42px] h-[27px]' />
            <p className={`${styles.paragraph} mt-10`}>{item.content}</p>
            <div className='flex mt-5 align-bottom'>
              <img src={item.img} alt={item.id} className='w-[48px] h-[48px]' />
              <div className='ml-4'>
                <h3 className={`text-white text-[20px] font-normal font-poppins leading-[32px]`}>{item.name}</h3>
                <label className={`font-poppins text-[16px] font-normal text-dimWhite leading-[24px]`}>{item.title}</label>
              </div>
            </div>
          </div>
        )))}
      </div>
    </section>
  )
}

export default Testimonials