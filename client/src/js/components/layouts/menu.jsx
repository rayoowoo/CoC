import React from 'react';
import {triggerHover } from '../reuse/utils';
import NavBarLink from './navbar_link';

export default () => {
    return (
        <li className="navbar-right-menu navbar-right-link"
            onMouseOver={triggerHover(true, "menu", "dropdown")}
            onMouseLeave={triggerHover(false, "menu", "dropdown")}>
            <p><i className="fa fa-bars"></i></p>
            <ul className="hover-dropdown" id="menu-dropdown">
                <NavBarLink menu={true} dir="left" label="About Us" links={["Our Stories"]} />
                <NavBarLink menu={true} dir="left" label="Activities" links={["Bible Studies", "Fellowship Nights", "Small Groups", "Two's and Three's", "College Conferences", "Spring Break Trips"]} />
                <NavBarLink menu={true} dir="left" label="Upcoming" />
                <NavBarLink menu={true} dir="left" label="Media" links={["Pictures", "Videos", "Words of Grace"]} />
                <NavBarLink menu={true} dir="left" label="Blog" />
                <NavBarLink menu={true} dir="left" label="Contact Us" />
            </ul>
        </li>
    )
}