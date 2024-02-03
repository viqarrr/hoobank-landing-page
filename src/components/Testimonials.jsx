/* eslint-disable no-unused-vars */
import React from 'react'
import { feedback } from "../constants";
import styles from '../style';
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute w-3/5 h-3/5 z-0 -right-1/2 rounded-full blue__gradient'/>
    <div className='w-full flex justify-between items-center flex-row lg:flex-col mb-16 lg:mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>What people are <br className='block md:hidden' /> saying about us</h1>
      <div className='w-full mt-0 md:mt-6'>
        <p className={`${styles.paragraph} text-left max-w-md`}>Everything you need to accept card payment and grow your business anywhere on the planet.</p>
      </div>
    </div>
    <div className='w-full flex flex-wrap justify-center relative z-[1] feedback-container'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
  )
}

export default Testimonials