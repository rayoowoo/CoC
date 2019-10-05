import React from 'react';

export default (props) => {
    return (
        <footer className="footer">
            <h2>Want to find out more?</h2>
            <button>CONTACT US!</button>

            <section className="footer-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-facebook"></i>
            </section>

            <section className="footer-disclaimer">
                <p>2019 Christians on Campus at Berkeley</p>
                <p>ucb.coc@gmail.com</p>
                <p>510.859.4687</p>
            </section>
        </footer>
    )
}