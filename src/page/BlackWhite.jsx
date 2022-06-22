import React from 'react'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
import ImagesBW from '../data/ImagesBW'
import ScrollToTop from '../components/ScrollToTop'
import '../style/ImagesStyled.css'
import 'react-loading-skeleton/dist/skeleton.css'

const BlackWhite = () => {
    return (
        <>
            <ScrollToTop />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="images-container">
                    <div className="images-grid">
                        <div className="images-left">
                            {
                                ImagesBW.map((images) => {
                                    if ((images.id % 2) !== 0) {
                                        return (
                                            <img src={images.img || <Skeleton />} alt="images-sk8mode" key={images.id} />
                                        );
                                    }
                                })
                            }
                        </div>
                        <div className="images-right">
                            {
                                ImagesBW.map((images) => {
                                    if ((images.id % 2) === 0) {
                                        return (
                                            <img src={images.img || <Skeleton />} alt="images-sk8mode" key={images.id} />
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

export default BlackWhite