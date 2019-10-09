import React from 'react';
import NavBarLink from './navbar_link';
import Menu from './menu';
import image from '../../../assets/images/coc.png';
import { historyPush } from '../reuse/utils';


export default (props) =>  (
        <>
            <header className="navbar">
                <section className="navbar-content">
                    <div className="navbar-left">
                        <img src={image} alt="logo"  onClick={historyPush('/')}/>
                        <h1 onClick={historyPush('/')}>CHRISTIANS ON CAMPUS at BERKELEY</h1>
                    </div>

                    <div className="navbar-right">
                        <NavBarLink menu="right" dir="dropdown" label="About Us" links={["Our Stories"]}/>
                        <NavBarLink menu="right" dir="dropdown" label="Activities" links={["Bible Studies", "Fellowship Nights", "Small Groups", "Two's and Three's", "College Conferences", "Spring Break Trips"]}/>
                        <NavBarLink menu="right" dir="dropdown" label="Upcoming"/>
                        <NavBarLink menu="right" dir="dropdown" label="Media" links={["Pictures", "Videos", "Words of Grace"]}/>
                        <NavBarLink menu="right" dir="dropdown" label="Blog"/>
                        <NavBarLink menu="right" dir="dropdown" label="Contact Us"/>
                        <Menu />
                    </div>
                </section>
            </header>
            <div className="navbar-filler"></div>
        </>
    )