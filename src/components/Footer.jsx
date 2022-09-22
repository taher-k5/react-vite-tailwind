import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constant'
import styles from '../style'

const Footer = () => {
  return (
    <section className='bg-[#0B0A0C99] w-full h-full'>
        <div className={`${styles.flexStart} ss:flex-row flex-col ss:p-[70px] p-5`}>
			<div className='flex flex-col justify-start h-full items-star ss:mb-0 mb-10'>
				<img src={logo} alt="footer logo" className='w-[266px] h-full' />
				<p className={`${styles.paragraph} md:w-2/3 w-full mt-10`}>A new way to make the payments easy, reliable and secure.</p>
			</div>
        	<div className='flex ss:flex-row flex-col justify-evenly items-start'>
				{footerLinks.map((item, index) => (
					<div key={index} className='flex flex-col ss:px-10'>
						<label className='font-poppins text-[18px] leading-[27px] font-bold text-white'>{item.title}</label>
						<div className='mt-5 flex flex-col'>
							{item.links.map((itemN, index) => (
								<a href={itemN.link} key={index} className='text-dimWhite font-normal text-[16px] leading-[24px] font-poppins py-2'>{itemN.name}</a>
							))}
						</div>
					</div>
				))}
			</div>
      	</div>

      	<div className={`flex ss:flex-row flex-col p-5 w-full justify-between items-center mx-auto ${styles.boxWidth} border-t-2 border-gray-800`}>
			<div>
			<p className={`${styles.paragraph}`}>Copyright &copy;	2021 HooBank. All Rights Reserved.</p>
			</div>
			<div className='flex ss:mt-0 mt-5'>
				{socialMedia.map((item, index) => (
				<div className='mx-3'>
					<a href={item.link}>
					<img src={item.icon} alt={item.id} />
					</a>
				</div>
				))}
			</div>
      	</div>
    </section>
  )
}

export default Footer