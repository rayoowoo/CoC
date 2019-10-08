import React from 'react';
import HoverDropdown from './hover_dropdown';
import image from '../../../assets/images/coc.png';

export default (props) => {

    return (
        <>
            <header className="navbar">
                <section className="navbar-content">
                    <div className="navbar-left">
                        <img src={image} alt="logo" />
                        <h1>CHRISTIANS ON CAMPUS at BERKELEY</h1>
                    </div>

                    <div className="navbar-right">
                        <HoverDropdown label="About Us" links={["Our Stories"]}/>
                        <HoverDropdown label="Activities" links={["Bible Studies", "Fellowship Nights", "Small Groups", "Two's and Three's", "College Conferences", "Spring Break Trips"]}/>
                        <HoverDropdown label="Upcoming" links={[]}/>
                        <HoverDropdown label="Media" links={["Pictures", "Videos", "Words of Grace"]}/>
                        <HoverDropdown label="Blog" links={[]}/>
                        <HoverDropdown label="Contact Us" links={[]}/>
                        <HoverDropdown label="MENU"/>
                    </div>
                </section>
            </header>
            <div className="navbar-filler"></div>
        </>
    )
}