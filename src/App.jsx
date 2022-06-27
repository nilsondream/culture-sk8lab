import React, { useEffect, useRef, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import useVH from 'react-viewport-height';
import { motion, AnimatePresence } from 'framer-motion'
import Menu from './components/Menu'
import Home from './page/Home'
import BlackWhite from './page/BlackWhite'
import GirlZone from './page/GirlZone'
import SoulNight from './page/SoulNight'
import CustomCursor from './components/CustomCursor'
import './style/GlobalStyled.css'

const App = () => {

    useVH();

    // Route
    const location = useLocation();


    // Preload
    const [preloader, setPreload] = useState(true);

    useEffect(() => {
        if (!preloader) {
            if (typeof window === 'undefined' || !window.document) {
                gsap.registerPlugin();
                return;
            }
        }
    }, [preloader]);

    const [timer, setTimer] = useState(3);

    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreload(false);
    };

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    if (typeof window === 'undefined' || !window.document) {
        gsap.registerPlugin();
    }

    return (
        <>
            <CustomCursor />
            {
                preloader ? (
                    <div className='loader-screen'>
                        <motion.h1 initial={{ opacity: 0, x: -100}} animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}>Culture</motion.h1>
                        <motion.h1 initial={{ opacity: 0, x: 100}} animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}>Sk8lab</motion.h1>
                    </div>
                ) : (
                    <>
                        <Menu />
                        <AnimatePresence exitBeforeEnter>
                            <Switch location={location} key={location.key}>
                                <Route exact path='/'><Home /></Route>
                                <Route path='/blackwhite'><BlackWhite /></Route>
                                <Route path='/girlzone'><GirlZone /></Route>
                                <Route path='/soulnight'><SoulNight /></Route>
                            </Switch>
                        </AnimatePresence>
                    </>
                )
            }
        </>
    )
}

export default App