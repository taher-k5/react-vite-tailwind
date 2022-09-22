import React from 'react'
import styles from '../style'

const Button = (props) => {
  return (
    <div className={`flex ${props.classProp}`}>      
        <a href={props.link} className={`bg-blue-gradient hover:text-white px-6 py-4 md:px-8 md:py-4 text-[18px] font-medium leading-[27px] font-poppins rounded-xl`}>{props.text}</a>
    </div> 
  )
}

export default Button