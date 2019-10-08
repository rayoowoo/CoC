import React from 'react';
import HoverDropdown from './hover_dropdown';
import image from '../../../assets/images/coc.png';
import {navigate} from 'hookrouter';

export default (props) => {

    return (
        <>
            <header className="navbar">
                <section className="navbar-content">
                    <div className="navbar-left">
                        <img src={image} alt="logo"  onClick={() => navigate('/')}/>
                        <h1 onClick={() => navigate('/')}>CHRISTIANS ON CAMPUS at BERKELEY</h1>
                    </div>

                    <div className="navbar-right">
                        <HoverDropdown url="about" label="About Us" links={["Our Stories"]}/>
                        <HoverDropdown url="activities" label="Activities" links={["Bible Studies", "Fellowship Nights", "Small Groups", "Two's and Three's", "College Conferences", "Spring Break Trips"]}/>
                        <HoverDropdown url="upcoming" label="Upcoming" links={[]}/>
                        <HoverDropdown url="media" label="Media" links={["Pictures", "Videos", "Words of Grace"]}/>
                        <HoverDropdown url="blog" label="Blog" links={[]}/>
                        <HoverDropdown url="contact" label="Contact Us" links={[]}/>
                        <HoverDropdown url="/" label="MENU"/>
                    </div>
                </section>
            </header>
            <div className="navbar-filler"></div>
        </>
    )
}