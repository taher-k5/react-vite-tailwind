import React from 'react'
import { card } from '../assets'
import styles from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={`${styles.flexStart} flex-col md:flex-row mb-20 md:mb-40`}>
      <div className={`${styles.flexStart} flex-col md:w-2/3 w-full mt-10 p-5`}>
        <h1 className={`${styles.heading2}`}>Find a better card deal in few easy steps.</h1>
        <p className={`${styles.paragraph}`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button text="Get Started" link="#getstarted" />
      </div>

      <div className={`${styles.flexStart} md:w-2/3 w-full p-5`}>
        <img src={card} alt="card" />
      </div>
    </section>
  )
}

export default CardDeal