'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypingText, TitleText, NewFeatures } from '../components';
import { newFeatures } from '../constants';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const WhatsNew = () => (
  <section className={` relative z-10  `}>
    {/* <motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{once: 'false', amount: 0.25}}
       className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img src="/whats-new.png" alt="whats-new" 
        className='w-[90%] h-[90%] object-contain'/>
      </motion.div>
      <motion.div
       variants={fadeIn('left', 'tween', 0.25, 1)}
       className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Whats's Mew?" />
        <TitleText title={<>What's new about TravelA?</>} />
        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature}/>
          ))}
        </div>
      </motion.div>
    </motion.div> */}
  </section>
);

export default WhatsNew;