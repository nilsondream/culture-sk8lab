import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useVH from 'react-viewport-height'
import { VscMenu, VscChromeClose } from "react-icons/vsc"
import '../style/MenuStyled.css'

const Menu = () => {

    // open sidebar
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="menu-container">
                <h1>Culture SK8LAB</h1>
                <div className="menu-links">
                    <NavLink exact activeClassName='active' to='/'>SK8 Mode</NavLink>
                    <NavLink activeClassName='active' to='/blackwhite'>B & W</NavLink>
                    <NavLink activeClassName='active' to='/girlzone'>Girl Zone</NavLink>
                    <NavLink activeClassName='active' to='/soulnight'>Soul Night</NavLink>
                </div>
                <VscMenu onClick={showSidebar} />
            </div>

            <div className={sidebar ? 'sidebar sidebar-active' : 'sidebar'}>
                <div className="menu-links">
                    <div className="link">
                        <NavLink exact activeClassName='active' to='/' onClick={showSidebar}>SK8 Mode</NavLink>
                        <p>2021</p>
                    </div>
                    <div className="link">
                        <NavLink activeClassName='active' to='/blackwhite' onClick={showSidebar}>B & W</NavLink>
                        <p>2020</p>
                    </div>
                    <div className="link">
                        <NavLink activeClassName='active' to='/girlzone' onClick={showSidebar}>Girl Zone</NavLink>
                        <p>2019</p>
                    </div>
                    <div className="link">
                        <NavLink activeClassName='active' to='/soulnight' onClick={showSidebar}>Soul Night</NavLink>
                        <p>2017 - 2018</p>
                    </div>
                </div>
                <VscChromeClose onClick={showSidebar} />
            </div>
        </>
    )
}

export default Menu