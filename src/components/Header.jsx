import video from '../assets/videoo.mp4'
import ScrollIcon from './scrollIcon/ScrollIcon';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import VaraText from './VaraText';
import {  useState } from 'react';
import { useScrollObserver } from './Context/useScrollObserver';



export default function Header({disableScroll}){
  const headerRef = useScrollObserver('header');

  const [disableScrollButton, setdisableScrollButton]=useState(disableScroll);
  const {scrollY}=useScroll();
  const text = "Cinematographer | Photographer".split("");

   useMotionValueEvent(scrollY, "change",(latest)=>{
     if(latest>100){
       setdisableScrollButton(prev=> prev || true);
     }
  });

  // useEffect(()=>{
  //   console.log(disableScrollButton,activeSection)
  //   if((activeSection && activeSection!=="header")||disableScrollButton===true){
  //     setdisableScrollButton(true);
  //   }
  // },[activeSection, disableScrollButton])
  //const fontSize = window.innerWidth < 768 ? 40 : 80;
  const fontSize = window.innerWidth > 1024 ? 80 : window.innerWidth > 426 ? 60 : window.innerWidth > 376 ? 35:window.innerWidth > 320?32:28;
  const heading = (
    <div className={"hero-content-centre"} id='title-centre'>
      <VaraText fontSize={fontSize}/>
      {text.map((el, i) => (
        <motion.span
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}
        </motion.span>
      ))}
    </div>
  );

    return(
        <section className="App" ref={headerRef} data-section="header"
        data-scroll-section
      data-scroll
      data-scroll-speed="6">
      <header className="hero-bg">
        
        <video
         className="hero-video"
         autoPlay
         muted
         loop
         playsInline>
            <source src={video} type='video/mp4'/>
        </video>
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