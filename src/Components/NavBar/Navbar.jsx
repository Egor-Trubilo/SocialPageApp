import React from 'react';
import classesNavBar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classesNavBar.nav}>
                    <ul className={classesNavBar.items}>
                        <li className={classesNavBar.item}>
                            <NavLink to='/profile' activeClassName={classesNavBar.active}>Profile</NavLink>
                        </li>
                        <li className={`${classesNavBar.item} ${classesNavBar.active}`}>
                            <NavLink to='/dialogs' activeClassName={classesNavBar.active}>Message</NavLink>
                        </li>
                        <li className={classesNavBar.item}>
                            <NavLink to='/news' activeClassName={classesNavBar.active}>News</NavLink>
                        </li>
                        <li className={classesNavBar.item}>
                            <NavLink to='/music' activeClassName={classesNavBar.active}>Music</NavLink>
                        </li>
                        <li className={classesNavBar.item}>
                            <NavLink to='/settings' activeClassName={classesNavBar.active}>Settings</NavLink>
                        </li>
                    </ul>
                </nav>
    )
}

export default Navbar;