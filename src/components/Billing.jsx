import React from 'react'
import { apple, bill, google } from '../assets'
import styles from '../style'

const Billing = () => {
  return (
    <section className={`flex md:flex-row flex-col justify-center items-start mb-10 md:mb-40`}>
      <div className='flex justify-center items-center'>
        <img src={bill} alt="bill" className='w-full h-full' />
      </div>
      <div className='flex flex-col justify-center mt-10 md:mt-20 md:w-2/3 w-full'>
        <h1 className='text-white font-poppins font-semibold ss:text-[48px] text-[38px] md:leading-[76px] leading-[60px]'>Easily control your billing & invoicing.</h1>
        <p className={`${styles.paragraph} font-poppins text-gray-400 mt-10`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex justify-between mt-10 ss:w-1/2 w-full'>
          <img src={apple} alt="apple" className='' />
          <img src={google} alt="google" className='' />
        </div>
      </div>
    </section>
  ) 
}

export default Billing