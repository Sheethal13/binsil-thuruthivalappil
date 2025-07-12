
import { useEffect, useRef, useState } from 'react';
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useSection } from "../Context/ScrollContext";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Footer from "../Footer";
import LeftNavBar from "../NavBar/LeftNavBar";
import { useMotionValueEvent, useScroll } from 'framer-motion';
import AboutHeader from "./AboutHeader";
import AboutBody from "./AboutBody";

export default function About() {
  const ref= useRef(null);
  const scrollRef = useRef(null); // ← add this
  const { activeSection } = useSection();
  const {scrollY}=useScroll();

  const [disableScrollButton, setdisableScrollButton]=useState(false);
  const [disableScrollButtonForMobile, setdisableScrollButtonForMobile]=useState(false);
  
  const options = {
    smooth: true,
  } 
  useMotionValueEvent(scrollY, "change",(latest)=>{
    if(latest>100){
      setdisableScrollButtonForMobile(prev=> prev || true);
    }
 });
  useEffect(()=>{
    console.log(disableScrollButton,activeSection)
    if((activeSection && activeSection!=="header")||disableScrollButton===true){
      setdisableScrollButton(true);
    }
    
  },[activeSection, disableScrollButton])
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}
    onLocationChange={(scroll) => (scrollRef.current = scroll)} // capture instance
    >
    <main data-scroll-container ref={ref}>
         <AboutHeader disableScroll={disableScrollButton}/>
         <AboutBody/>
         <Footer/>
         {(disableScrollButton || disableScrollButtonForMobile) && <LeftNavBar />}

      </main>
    </LocomotiveScrollProvider>
  );
}

