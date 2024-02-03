/* eslint-disable no-unused-vars */
import React from 'react'
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-full h-full relative z-[5]' />
        <div className='w-1/2 h-1/2 absolute z-[3] -left-1/2 top-0 rounded-full white__gradient' />
        <div className='w-1/2 h-1/2 absolute z-[3] -left-1/2 bottom-0 rounded-full pink__gradient' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='block md:hidden'/> billing & invoincing.</h2>
        <p className={`${styles.paragraph} max-w-lg mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor inteder platea placerat.
        </p>
        <div className='flex flex-row flex-wrap mt-10 md:mt-10'>
          <img src={apple} alt="" className='w-32 h-10 object-contain mr-5 cursor-pointer' />
          <img src={google} alt="" className='w-32 h-10 object-contain mr-5 cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing