import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import useVH from 'react-viewport-height';
import Menu from './components/Menu'
import Home from './page/Home'
import BlackWhite from './page/BlackWhite'
import GirlZone from './page/GirlZone'
import SoulNight from './page/SoulNight'
import CustomCursor from './components/CustomCursor'
import './style/GlobalStyled.css'

const App = () => {

    useVH();

    const location = useLocation();

    return (
        <>
            <Menu />
            <CustomCursor />
            <AnimatePresence exitBeforeEnter initial={false}>
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

export default App
