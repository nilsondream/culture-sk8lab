import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { SkeletonTheme } from 'react-loading-skeleton'
import Menu from './components/Menu'
import Home from './page/Home'
import BlackWhite from './page/BlackWhite'
import GirlZone from './page/GirlZone'
import SoulNight from './page/SoulNight'
import CustomCursor from './components/CustomCursor'
import './style/GlobalStyled.css'
import 'react-loading-skeleton/dist/skeleton.css'

const App = () => {

    const location = useLocation();

    return (
        <>
            <Menu />
            <CustomCursor />
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch location={location} key={location.key}>
                        <Route exact path='/'><Home /></Route>
                        <Route path='/blackwhite'><BlackWhite /></Route>
                        <Route path='/girlzone'><GirlZone /></Route>
                        <Route path='/soulnight'><SoulNight /></Route>
                    </Switch>
                </AnimatePresence>
            </SkeletonTheme>
        </>
    )
}

export default App