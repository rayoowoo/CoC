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
                        <NavBarLink menu={false} dir="dropdown" label="About Us" links={["Our Stories"]}/>
                        <NavBarLink menu={false} dir="dropdown" label="Activities" links={["Bible Studies", "Fellowship Nights", "Small Groups", "Two's and Three's", "College Conference", "Spring Break Trips"]}/>
                        <NavBarLink menu={false} dir="dropdown" label="Upcoming"/>
                        <NavBarLink menu={false} dir="dropdown" label="Media" links={["Pictures", "Videos", "Words of Grace"]}/>
                        <NavBarLink menu={false} dir="dropdown" label="Blog"/>
                        <NavBarLink menu={false} dir="dropdown" label="Contact Us"/>
                        <Menu />
                    </div>
                </section>
            </header>
            <div className="navbar-filler"></div>
        </>
    )