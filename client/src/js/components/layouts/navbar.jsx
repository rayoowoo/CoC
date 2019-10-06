import React from 'react';

export default (props) => {
    return (
        <>
            <header className="navbar">
                <section className="navbar-content">
                    <div className="navbar-left">
                        <img src="" alt="logo" />
                        <h1>CHRISTIANS ON CAMPUS at BERKELEY</h1>
                    </div>

                    <ul className="navbar-right">
                        <li>About Us</li>
                        <li>Activities</li>
                        <li>Upcoming</li>
                        <li>Media</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li className="navbar-right-menu">MENU</li>
                    </ul>
                </section>
            </header>
            <div className="navbar-filler"></div>
        </>
    )
}