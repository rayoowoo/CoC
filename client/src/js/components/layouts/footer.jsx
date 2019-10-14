import React from 'react';

export default (props) => {
    return (
        <footer className="footer">
            <h2 className="head3">Want to find out more?</h2>
            <button className="button3">CONTACT US!</button>

            <section className="footer-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-facebook"></i>
            </section>

            <section className="footer-disclaimer">
                <p className="paragraph">© 2019 Christians on Campus at Berkeley</p>
                <p className="paragraph">ucb.coc@gmail.com</p>
                <p className="paragraph">510.859.4687</p>
            </section>
        </footer>
    )
}