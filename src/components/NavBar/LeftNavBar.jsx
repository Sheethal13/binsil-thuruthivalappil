import { motion } from "framer-motion";
import { FaHome,FaBars, FaUser,FaReact} from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import './LeftNavBar.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const icons=[
    {icon:<FaHome/>, label:"Home", path:"/"},
    {icon:<FaUser/>, label:"About", path:"/about"},
    {icon:<FaReact/>, label:"Projects",path:""},
    {icon:<GrDocumentText/>, label:"Resume",path:""}
]

export default function LeftNavBar(){
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
      };
    return(<div>
        <motion.div 
        
        className="side-navbar"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{scale:1.1}}
        transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}>
            <ul>

                {icons.map((icon, index) => {
                    let scale = 1, y=0;
                    if (index === hoveredIndex) {scale = 1.2; y=-10;}
                    else if (index === (hoveredIndex!=null &&(hoveredIndex - 1 || index === hoveredIndex + 1))) {scale = 1.1; y=-5;}
                    else if(icon.label==="About") {scale=1;y=0};
          
                    return(<motion.li key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={{ scale,y }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        title={icon.label}
                        style={{
                            zIndex: index === hoveredIndex ? 2 : 1,
                            overflow: index === (hoveredIndex!=null &&(hoveredIndex - 1 || index === hoveredIndex + 1)) ? "hidden" : "initial",
                        }}
                    >
                         <Link to={icon.path} className="icon-link">
                        {icon.icon}
                        </Link>
                    </motion.li>);
                    
                })}
            </ul>
        </motion.div>
        {/* Hamburger Icon - Small Screens */}
        <div className="hamburger-container">
        <div className="hamburger-icon" onClick={toggleMenu}>
            <FaBars size={28} color="#fff" />
        </div>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        {icons.map((icon, index) => {
            return(<li key={index}
                title={icon.label}
            >
                 <Link to={icon.path} className="icon-link">
                {icon.label}
                </Link>
            </li>);
            
        })}
        </ul>
        </div>

        </div>
    )
}