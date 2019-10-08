import React from 'react';
import NavBarLink from './navbar_link';
import image from '../../../assets/images/coc.png';
import {navigate} from 'hookrouter';

export default (props) =>  (
        <>
            <header className="navbar">
                <section className="navbar-content">
                    <div className="navbar-left">
                        <img src={image} alt="logo"  onClick={() => navigate('/')}/>
                        <h1 onClick={() => navigate('/')}>CHRISTIANS ON CAMPUS at BERKELEY</h1>
                    </div>

                    <div className="navbar-right">
                        <NavBarLink url="about" label="About Us" links={["Our Stories"]}/>
                        <NavBarLink url="activities" label="Activities" links={["Bible Studies", "Fellowship Nights", "Small Groups", "Two's and Three's", "College Conferences", "Spring Break Trips"]}/>
                        <NavBarLink url="upcoming" label="Upcoming"/>
                        <NavBarLink url="media" label="Media" links={["Pictures", "Videos", "Words of Grace"]}/>
                        <NavBarLink url="blog" label="Blog"/>
                        <NavBarLink url="contact" label="Contact Us"/>
                        <NavBarLink url="/" label="MENU"/>
                    </div>
                </section>
            </header>
            <div className="navbar-filler"></div>
        </>
    )