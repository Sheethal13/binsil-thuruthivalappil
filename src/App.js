// import { useEffect, useRef, useState } from 'react';
import './App.css';
import "locomotive-scroll/dist/locomotive-scroll.css";
// import { useSection } from './components/Context/ScrollContext';
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';
// import LeftNavBar from './components/NavBar/LeftNavBar';
///import FooterTwo from './components/FooterTwo/FooterTwo';
// import { useMotionValueEvent, useScroll } from 'framer-motion';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About/About';


const router = createBrowserRouter([
  { path: '', element: <LandingPage /> },
  { path: '/about', element: <About /> },
]);

function App() {
//   const ref= useRef(null);
//   const scrollRef = useRef(null); // ← add this
//   const { activeSection } = useSection();
//   const {scrollY}=useScroll();

//   const [disableScrollButton, setdisableScrollButton]=useState(false);
//   const [disableScrollButtonForMobile, setdisableScrollButtonForMobile]=useState(false);
  
//   const options = {
//     smooth: true,
//   } 
//   useMotionValueEvent(scrollY, "change",(latest)=>{
//     if(latest>100){
//       setdisableScrollButtonForMobile(prev=> prev || true);
//     }
//  });
//   useEffect(()=>{
//     console.log(disableScrollButton,activeSection)
//     if((activeSection && activeSection!=="header")||disableScrollButton===true){
//       setdisableScrollButton(true);
//     }
    
//   },[activeSection, disableScrollButton])
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
