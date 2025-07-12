import img1 from '../assets/website image 1.jpeg';
import img2 from '../assets/website image 2.jpeg';
import img3 from '../assets/website image 3.jpeg';
import img4 from '../assets/website image 4.jpeg';
import img5 from '../assets/website image 5.jpeg';
import img6 from '../assets/website image 6.jpeg';
import img7 from '../assets/website image 7.jpeg';
import img8 from '../assets/website image 8.jpeg';
import img9 from '../assets/website image 9.jpeg';
import img10 from '../assets/website image 10.jpeg';
import img11 from '../assets/website image 12.jpeg';
import img12 from '../assets/website image 11.jpeg';
import img13 from '../assets/website image 13.jpeg';
import img14 from '../assets/website image 14.jpeg';
import img15 from '../assets/website image 16.jpeg';
import img16 from '../assets/website image 15.jpeg';
import img17 from '../assets/website image 17.jpeg';
import img18 from '../assets/website image 18.jpeg';

import { useScrollObserver } from './Context/useScrollObserver';
import VideoEmbed from './VideoEmbed/VideoEmbed';
import { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import Carousal from './Carousal';
export default function PhotoGrid() {
    const [isImageFullScreen, setIsImageFullScreen] = useState(false);
    const [indexCurrent, setIndexCurrent] = useState(null);
    const [imageClicked, setImageClicked] = useState(null);

    function handleImageClick(image,index) {
        setIsImageFullScreen(true);
        setImageClicked(image);
        setIndexCurrent(index);
    }
    function handleCloseClick() {
        setIsImageFullScreen(false);
    }
    const gridRef = useScrollObserver('grid');
    const imgArr = [
        { imgSrc: img1, alt: 'something that ai generTEDD' },
        { imgSrc: img2, alt: 'something that ai generTEDD' },
        { imgSrc: img3, alt: 'something that ai generTEDD' },
        { imgSrc: img4, alt: 'something that ai generTEDD' },
        { imgSrc: img5, alt: 'something that ai generTEDD' },
        { imgSrc: img6, alt: 'something that ai generTEDD' },
        { imgSrc: img7, alt: 'something that ai generTEDD' },
        { imgSrc: img8, alt: 'something that ai generTEDD' },
        { imgSrc: img9, alt: 'something that ai generTEDD' },
        { imgSrc: img10, alt: 'something that ai generTEDD' },
        { imgSrc: img11, alt: 'something that ai generTEDD' },
        { imgSrc: img12, alt: 'something that ai generTEDD' },
        { imgSrc: img13, alt: 'something that ai generTEDD' },
        { imgSrc: img14, alt: 'something that ai generTEDD' },
        { imgSrc: img15, alt: 'something that ai generTEDD' },
        { imgSrc: img16, alt: 'something that ai generTEDD' },
        { imgSrc: img17, alt: 'something that ai generTEDD' },
        { imgSrc: img18, alt: 'something that ai generTEDD' },
    ]
    return (
        <section ref={gridRef} data-section="grid"
            data-scroll-section id='grid' style={{ background: "black" }}>
            <AnimatePresence>
                {isImageFullScreen &&
                    <Carousal onDone={handleCloseClick} images={imgArr} img={imageClicked} index={indexCurrent} />}
            </AnimatePresence>
            <div>

                <div>
                    <ul className='image-list'>
                        {imgArr.map((img, index) => {
                            return (<li key={index}
                            // data-scroll
                            // data-scroll-direction="horizontal"
                            // data-scroll-speed="9"
                            >
                                    {/* <motion.img className="mobile-img"
                                    src={img.imgSrc}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    /> */}
                                <img src={img.imgSrc} alt={img.alt}
                                loading='lazy'
                                    className="op-class desk-img"
                                    data-scroll
                                    data-scroll-class='fadeIn'
                                    //data-scroll-class={index % 2 === 0 ? 'fadeInFromLeft' : 'fadeInFromRight'}
                                    data-scroll-repeat="true"
                                    onClick={() => handleImageClick(img,index)}
                                />
                            </li>)
                        })}
                    </ul>
                </div>
                <VideoEmbed />
            </div>

        </section>

    )
}