import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexStart} mb-20 md:mx-10 md:p-20 p-10 bg-black-gradient-2 rounded-xl`}>
      <div className={`w-full flex md:flex-row flex-col justify-between items-center`}>
        <div className='flex flex-col md:w-2/3 w-full items-start justify-between'>
          <h1 className={`font-poppins font-semibold xs:text-[48px] text-[30px] text-white xs:leading-[76.8px] leading-[40.8px] w-full`}>Let’s try our service now!</h1>
          <p className={`${styles.paragraph} mt-3 md:mt-0`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <Button text={'Get Started'} link='#' classProp='mt-10 md:mt-0' />
      </div>
    </section>
  )
}

export default CTA