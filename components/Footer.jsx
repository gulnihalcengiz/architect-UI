'use client';

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-8 relative`}>
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap*8`}>
      {/* <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the TravelA
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]" >
          <img src="/headset.svg" alt="headset" 
          className="w-[24px] h-[24px] object-contain"/>
          <span className="font-normal text-[16px] text-white">ENTER TRAVELA</span>
        </button>
      </div> */}
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-stone-400 opacity-20" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <a href="https://www.instagram.com/gulnihal.cengiz/"> <h4 className="font-extrabold text-[24px] text-stone-400">Architect</h4> </a>
          <p className="font-normal text-[14px] text-stone-700 opacity-50">
            Copyright © 2023 Architect. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img  key={social.name} src={social.url} alt={social.name} className="w-[24px] h-[24px] object-contain cursor-pointer "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
