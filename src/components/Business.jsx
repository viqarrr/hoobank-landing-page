/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { features } from "../constants/index";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ index, icon, title, content }) => {
  return (
  <div className={`flex flex-row p-6 rounded-3xl ${index !== 'features-3' ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-1/2 h-1/2 object-contain'/>
    </div>
    <div className='flex flex-1 flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-lg leading-5 mb-1'>{title}</h4>
      <p className='font-poppins font-semibold text-white text-base leading-6 mb-1'>{content}</p>
    </div>
  </div>
  )
}

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='block md:hidden'/> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-md mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money. But with hundreds on the market.</p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business