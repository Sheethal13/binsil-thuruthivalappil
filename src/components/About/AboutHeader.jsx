import ScrollIcon from '../scrollIcon/ScrollIcon';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import './AboutHeader.css';
import {  useState } from 'react';
import { useScrollObserver } from '../Context/useScrollObserver';



export default function AboutHeader({disableScroll}){
  const headerRef = useScrollObserver('header');

  const [disableScrollButton, setdisableScrollButton]=useState(disableScroll);
  const {scrollY}=useScroll();

   useMotionValueEvent(scrollY, "change",(latest)=>{
     if(latest>100){
       setdisableScrollButton(prev=> prev || true);
     }
  });

  const heading = (
    <div className={"hero-content-centre"} id='title-centre'>
      <motion.h1
        className="nimbus about-heading"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >THE STORY BEHIND</motion.h1>

      <motion.p
        className="signature-text"
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
      >Binsil Thuruthivalappil</motion.p>

    </div>
  );

    return(
        <section className="App" ref={headerRef} data-section="header"
        data-scroll-section
      data-scroll
      data-scroll-speed="6">
      <header className="hero-bg-about">
        
      {/* <img src={pic} className="hero-image" alt="Header Background" /> */}
        {heading}
        {!(disableScroll || disableScrollButton) && (
          <div className="bottom-scrollIcon">
            <ScrollIcon />
          </div>
        )}
      </header>
    </section>
    )
}