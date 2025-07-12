import { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion, useAnimation } from "framer-motion";
import { useScrollObserver } from "./Context/useScrollObserver";
import { FaInstagram, FaImdb, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import  './About/AboutHeader.css'

export default function Footer() {
  const { scroll } = useLocomotiveScroll();
  const footerRef = useRef(null);
  const sectionRef = useScrollObserver("footer");
  const connectControls = useAnimation();
  const boxControls = useAnimation();

  const setRefs = (el) => {
    footerRef.current = el;
    sectionRef.current = el;
  };

  useEffect(() => {
    if (!scroll || !footerRef.current) return;

    scroll.on("call", (func, dir) => {
      if (func === "footerEnter" && dir === "enter") {
        
        connectControls.start({ opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, delay: 1 } });
        boxControls.start({ opacity: 1, y: 0, transition: { duration: 1.2, delay: 1.5 } });
      }
    });
  }, [boxControls, connectControls, scroll]);

  return (
    <section data-scroll-section >
      <div
        data-scroll
        data-scroll-call="footerEnter"
        data-scroll-repeat="true"
        data-scroll-id="footer-section"
        ref={setRefs}
        className="footer-wrapper about-footer" 
        data-scroll-class="footer-active"
      >
        <div className="hemisphere-gradient" />
        <motion.div
          className="footer-title"
          initial={{ opacity: 0, y: 100, scale: 0.7 }}
          animate={connectControls}
        >
          <div className="card">
            <div className="loader responsive-wrap">
              <p className='nimbus lets'>LET'S</p>
              <div className="words animated-word">
                <span className="word nimbus">CONNECT</span>
                <span className="word nimbus">DISCOVER</span>
                <span className="word nimbus">COLLABORATE</span>
                <span className="word nimbus">CAPTURE</span>
                <span className="word nimbus">CREATE</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-sub"
          initial={{ opacity: 0, y: 100 }}
          animate={boxControls}
        >
          <div className="message-box">
          <textarea placeholder="Drop your message here..." />
          <button>Send</button>
          </div>
          <div className="social-handles">
          <ul>
        <li>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" /> Instagram
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/name/nm0000000/" target="_blank" rel="noopener noreferrer">
            <FaImdb className="icon" /> IMDb
          </a>
        </li>
        <li>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" /> WhatsApp
          </a>
        </li>
        <li>
          <a href="mailto:your.email@example.com">
            <FaEnvelope className="icon" /> Gmail
          </a>
        </li>
      </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
