import React from 'react';
import NavBarLink from './navbar_link';
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
                        <NavBarLink label="About Us" links={["Our Stories"]}/>
                        <NavBarLink label="Activities" links={["Bible Studies", "Fellowship Nights", "Small Groups", "Two's and Three's", "College Conferences", "Spring Break Trips"]}/>
                        <NavBarLink label="Upcoming"/>
                        <NavBarLink label="Media" links={["Pictures", "Videos", "Words of Grace"]}/>
                        <NavBarLink label="Blog"/>
                        <NavBarLink label="Contact Us"/>
                        <NavBarLink label="MENU"/>
                    </div>
                </section>
            </header>
            <div className="navbar-filler"></div>
        </>
    )