/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`w-full ${styles.flexStart} flex-col mb-8`}>
      <div>
        <img src={logo} alt="hoobank" className='w-64 h-[72px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-xs`}>A new way to make the payments easy, reliable and secure</p>
      </div>
      <div className='w-full flex flex-[1.5] flex-row justify-between flex-wrap mt-10'>
        {footerLinks.map((footerLink, index) => (
          <div key={index} className='flex flex-col my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-lg leading-7 text-white'>
              {footerLink.title}
            </h4>
            <ul className='mt-4'>
              {footerLink.links.map((link, index) => (
                <li 
                key={link.name}
                className={`font-poppins font-normal text-base leading-6 text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0 '}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='w-full flex justify-between items-center flex-row lg:flex-col pt-6 border-t-2 border-t-[#3f3e45]'>
      <p className='font-poppins font-normal text-center text-lg leading-7 text-white'>
        2021 HooBank, All Right Reserved.
      </p>
      <div className='flex flex-row mt-0 lg:mt-6'>
        {socialMedia.map((social, index) => (
          <img 
            key={social.id}
            src={social.icon} 
            alt={social.id}
            className={`w-5 h-5 object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Footer