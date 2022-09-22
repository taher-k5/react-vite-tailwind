import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexStart} m-10 p-20 bg-black-gradient-2 rounded-xl`}>
      <div className={`w-full flex justify-between items-center`}>
        <div className='flex flex-col md:w-2/3 w-full items-start justify-between'>
          <h1 className={`${styles.heading2}`}>Let’s try our service now!</h1>
          <p className={`${styles.paragraph}`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <Button text={'Get Started'} link='#' />
      </div>
    </section>
  )
}

export default CTA