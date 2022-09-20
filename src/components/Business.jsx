import React from 'react'
import { features } from '../constant'
import styles from '../style'
import Button from './Button'
import { star } from '../assets'

const Business = () => {
  return (
    <section className={`flex flex-col md:flex-row items-center flex-1 mb-6 md:mb-10`}>
      <div className={`flex-1`}>
        <h1 className={`font-poppins font-semibold leading-[76px] text-[48px] text-white`}>You do the business, we’ll handle the money.</h1>
        <p className={`${styles.paragraph} text-[18px] font-normal font-poppins leading-[30px] text-gray-400`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button text="Get Started" link="#getstarted" />
      </div>

      <div className={`${styles.flexStart} flex-col`}>
          {features.map((item, index) =>(
            <div key={index} className={`my-5 ${styles.flexCenter} feature-card rounded-xl py-5 mx-auto`}>
              <div className='bg-blue-400 w-[60px] h-[60px] rounded-full mr-5'></div>
              {/* <img src={item.icon} alt={item.icon} className='mr-5' /> */}
              <div className='ss:w-2/3 w-full'>
                <h3 className={`text-white font-poppins text-[18px] font-semibold leading-[23px] mb-3`}>{item.title}</h3>
                <p className={`${styles.paragraph} text-[16px] font-normal leading-[24px] font-poppins`}>{item.content}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Business