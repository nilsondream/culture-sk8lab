import React from 'react'
import { motion } from 'framer-motion'
import ImagesGirlZone from '../data/ImagesGirlZone';
import ScrollToTop from '../components/ScrollToTop';
import '../style/ImagesStyled.css'

const GirlZone = () => {
    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0, transition: { ease: [0.6, 0.01, -0.05, 0.9] } }} exit={{ x: "100%", transition: { ease: [0.6, 0.01, -0.05, 0.9] } }}>
                <div className="images-container">
                    <div className="images-grid">
                        <div className="images-left">
                            {
                                ImagesGirlZone.map((images) => {
                                    if ((images.id % 2) !== 0) {
                                        return (
                                            <img src={images.img} alt="images-sk8mode" key={images.id} />
                                        );
                                    }
                                })
                            }
                        </div>
                        <div className="images-right">
                            {
                                ImagesGirlZone.map((images) => {
                                    if ((images.id % 2) === 0) {
                                        return (
                                            <img src={images.img} alt="images-sk8mode" key={images.id} />
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default GirlZone