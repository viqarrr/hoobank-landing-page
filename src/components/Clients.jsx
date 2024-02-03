/* eslint-disable no-unused-vars */
import React from 'react'
import { clients } from "../constants";
import styles from '../style';

const Clients = () => {
  return (
  <section className={`${styles.flexCenter} my-8`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} min-w-[192px] md:min-w-[120px]`}>
          <img src={client.logo} alt="client" className='md:w-48 w-24 my-4 md:my-0 object-contain' />
        </div>
      ))}
    </div>
  </section>
 )
}

export default Clients