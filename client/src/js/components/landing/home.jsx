import React from 'react';
import {historyPush} from '../reuse/utils';

export default (props) => {
    return (
        <section className="landing">
            <div className="landing-img-container">
                <img src={`https://static.wixstatic.com/media/bacfc7_d4ba929224a24a64b427ef91ee11dfd2~mv2_d_4496_3000_s_4_2.jpg/v1/fill/w_1838,h_800,al_c,q_85,usm_0.66_1.00_0.01/bacfc7_d4ba929224a24a64b427ef91ee11dfd2~mv2_d_4496_3000_s_4_2.webp`} alt="SLIDESHOW"/>
            </div>
            <div className="landing-banner">
                <h1>Come pursue Christ with us!</h1>
                <button onClick={historyPush("/about-us")}>LEARN MORE</button>
            </div>
            <div className="landing-video">
                <iframe src="https://player.vimeo.com/video/57909935?loop=1"
                        frameBorder="0"
                        allow="fullscreen"
                        allowFullScreen></iframe>
            </div>
        </section>
    )
}