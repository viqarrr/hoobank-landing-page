/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
  <div className='px-10 py-12 flex justify-between flex-col rounded-3xl max-w-sm mr-5 md:mr-10 my-5 feedback-card'> 
    <img src={quotes} alt="double_quotes" className='w-11 h-7 object-contain' />
    <p className='font-poppins font-normal text-lg leading-8 text-white my-10'>{content}</p>
    <div className='flex flex-row'>
      <img src={img} alt={name} className='w-12 h-12 rounded-full' />
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-normal text-xl leading-8 text-white'>{name}</h4>
        <p className='font-poppins font-normal text-base leading-6 text-dimWhite'>{title}</p>
      </div>
    </div>
  </div>
  )
}

export default FeedbackCard