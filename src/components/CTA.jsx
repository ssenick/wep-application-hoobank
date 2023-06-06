import React from 'react';
import styles from "../style.js";
import {Button} from "./index.js";


const CTA = () => (
   <section
      className={`${styles.flexCenter} sm:mx-16 mx-0 sm:px-16 px-4 sm:py-12 py-4  mt-20 md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex flex-1 flex-col ">
         <h2 className={styles.heading2}>Let’s try our service now!</h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on
            the planet.</p>
      </div>
      <div className={`${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10`}>
         <Button>Get Started</Button>
      </div>
   </section>
);

export default CTA;