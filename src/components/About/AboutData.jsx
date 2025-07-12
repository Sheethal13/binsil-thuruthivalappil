import { useEffect, useState } from 'react';
import videoo from '../../assets/xss.mp4'
import './AboutHeader.css'
import { motion } from 'framer-motion'

export default function AboutData() {

    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.createElement("video");
        video.src = videoo;
        video.preload = "auto";
        video.oncanplaythrough = () => {
            setVideoLoaded(true);
        };
    }, []);

    if (!videoLoaded) {
        return (
            <div className="loading-screen">
                <p>Loading...</p>
            </div>
        );
    }
    return (
        <section data-section="about"
        data-scroll-section id='about' style={{ background: "black" }}>
            <div className='about-div'>
                <div className="about-video-div">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={videoo} type="video/mp4" />
                    </video>
                </div>
                <div className="about-content-div"
                    data-scroll
                    //data-scroll-class='fadeIn'
                    //data-scroll-class={index % 2 === 0 ? 'fadeInFromLeft' : 'fadeInFromRight'}
                    //data-scroll-repeat="true"
                    >
                    <p className='about-p'>Binsil Thuruthivalappil is a passionate cinematographer certified by <span>Mindscreen Film Institute, Chennai</span>. With a strong foundation in camera operation, lighting, and composition, he brings a unique blend of technical skill and visual storytelling to his work. Detail-oriented and creatively driven, Binsil believes in the power of cinema to evoke emotion and meaning.</p>
                    <p className='about-p'>short films like <span>TRASH</span> and <span>Thallupuranam</span>, with TRASH earning recognition at the International Book of Records and Indie World Film Festival. He also directed and shot the heartfelt Raihaan musical album, and handled camera operations for a wide range of formats using tools like the ARRI ALEXA, RED, and Sony FX series. His skillset extends into editing and color grading using DaVinci Resolve, Adobe Premiere Pro, and other tools.</p>
                    <p className='about-p'>
                        Recently, Binsil assisted in the cinematography of a feature film, independently handled the cinematography for a documentary titled <span>“It Was Here, Before Our Time”</span>, and is now working on an upcoming movie project. As he continues to expand his portfolio, he remains committed to bold visual storytelling and collaborative filmmaking that leaves an impact.
                    </p>
                </div>
            </div>
        </section>
    )
}