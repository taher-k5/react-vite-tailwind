import React from 'react'
import styles from '../style'

const Button = (props) => {
  return (
    <div className={`flex mt-10`}>      
        <a href={props.link} className={`bg-blue-gradient p-4 md:p-6 text-[18px] font-medium leading-[27px] font-poppins rounded-xl`}>{props.text}</a>
    </div> 
  )
}

export default Button