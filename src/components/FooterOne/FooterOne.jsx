// components/Footer.js
import { motion } from "framer-motion";
import { useRef } from "react";
import './FooterOne.css'

export default function FooterOne() {
  const footerRef = useRef(null);

  return (
    <section
      data-scroll-section
      ref={footerRef}
      className="footer-section"
      viewport={{ once: true, amount: 1 }}
    >
      {/* Radial background */}
      <motion.div
        className="footer-bg"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>

      {/* Title */}
      <motion.h1
        className="footer-title"
        initial={{ y: 100, scale: 0.5, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
      >
        LET’S CONNECT
      </motion.h1>

      {/* Message box */}
      <motion.div
        className="message-box"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
      >
        <textarea placeholder="Drop your message..." />
      </motion.div>
    </section>
  );
}
