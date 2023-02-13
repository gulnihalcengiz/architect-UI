'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypingText, TitleText, ExploreCard } from '../components';
import { exploreWorlds } from '../constants';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Explore = () => {
  const [active, setActive] = useState('world-2')

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Design" textStyles="text-center text-stone-400" />
        <TitleText title={<>Choose the Building You <br className='md:block hidden' />Want to Have </>} textStyles="text-center text-stone-600" />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );

}

export default Explore;
