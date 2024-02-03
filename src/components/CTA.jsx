/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-3xl box-shadow`}>
    <div className='flex flex-1 flex-col'>
      <h2 className={styles.heading2}>Lets try our service now</h2>
      <p className={`${styles.paragraph} max-w-md mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className={`${styles.flexCenter} md:ml-10 ml-0 md:py-0 py-10`}>
      <Button />
    </div>
  </section>
  )
}

export default CTA