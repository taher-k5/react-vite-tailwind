import React from 'react'
import style from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import styles from '../style'

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${style.paddingY}`}>
      <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${style.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount For {" "}
            <span className='text-white'>1 MONTH</span> Acoount
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white leading-[75px] ss:leading-[100px]'>
            The Next <br className='sm:block hidden' />
            <span className={`text-gradient`}>
              Generation
            </span> <br />
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white leading-[75px] ss:leading-[100px]'>
          Payment Method.
        </h1>

        <p className='font-poppins text-[18px] font-normal leading-[30px] text-gray-400 ss:w-[480px] w-full mt-10'>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className={`${style.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
        <img src={robot} alt="robot" className='w-full h-full relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>

      <div className={`${styles.flexStart} ss:hidden`}>
        <GetStarted />
      </div>
      
    </section>
  )
}

export default Hero