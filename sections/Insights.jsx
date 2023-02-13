'use client';
import { motion } from 'framer-motion';
import { TypingText, TitleText, InsightCard } from '../components';
import { insights } from '../constants';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10  `}>
  <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once: 'false', amount: 0.25}}
     className={`${styles.innerWidth} mx-auto flex flex-col`}
  >
    <TypingText title="What's New?" textStyles="text-center text-stone-500" />
    <TitleText title="Inside Architect World" textStyles="text-center text-stone-700" />
    <div className='mt-[50px] flex flex-col gap-[30px]'>
      {insights.map((insight, index) => (
        <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
      ))}
    </div>
  </motion.div>
  </section>
);

export default Insights;
