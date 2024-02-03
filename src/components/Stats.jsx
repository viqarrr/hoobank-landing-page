/* eslint-disable no-unused-vars */
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap mt-4 mb-20 lg:mt-0 lg:mb-6`}>
    {stats.map((stat) => (
      <div 
      key={stat.id} 
      className={`flex-1 flex items-center flex-col mb-20 md:flex-row lg:mb-6`}>
        <h4 className="font-poppins font-semibold xs:text-4xl text-3xl xs:leading-[53px] leading-[43px] text-white mb-2 md:mb-0">{stat.value}</h4>
        <p className={`text-center font-poppins font-normal xs:text-xl text-base xs:leading-[26px] leading-[21px] text-gradient uppercase md:ml-3`}>{stat.title}</p>
      </div>  
    ))}
  </section>
)

export default Stats