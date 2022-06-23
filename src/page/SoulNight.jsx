import React from 'react'
import { motion } from 'framer-motion'
import ImagesSoulNight from '../data/ImagesSoulNight'
import ScrollToTop from '../components/ScrollToTop'
import '../style/ImagesStyled.css'

const SoulNight = () => {
    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="images-container">
                    <div className="images-grid">
                        <div className="images-left">
                            {
                                ImagesSoulNight.map((images) => {
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
                                ImagesSoulNight.map((images) => {
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

export default SoulNight