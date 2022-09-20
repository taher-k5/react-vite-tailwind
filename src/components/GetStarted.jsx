import React from 'react'
import styles from '../style'
import {arrowUp} from '../assets' 

const GetStarted = () => {
  return (
    <div className={`${styles.flexStart} bg-blue-gradient p-[2px] cursor-pointer w-[140px] h-[140px] rounded-full border border-1 items-center`}> 
      <div className={`bg-primary ${styles.flexCenter} w-full h-full rounded-full`}>
        <p className='text-gradient'>
          <span className='flex'>
            Get
            <img src={arrowUp} alt="arrow" className='w-[25px] h-[25px] ml-2' />
          </span>
          Started
        </p>
      </div>
    </div>
  )
}

export default GetStarted