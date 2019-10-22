import React from 'react';
import {historyPush, useFetch} from '../reuse/utils';

export default (props) => {
    const picture = useFetch('/api/pictures/landing-splash') || {};
    console.log(picture);

    return (
        <section className="landing">
            <div className="landing-img-container">
                <img src={picture.url} alt="SLIDESHOW"/>
            </div>
            <div className="landing-banner">
                <h1 className="head1">Come pursue Christ with us!</h1>
                <button className="button2" onClick={historyPush("/about-us")}>LEARN MORE</button>
            </div>
            <div className="landing-video">
                <iframe src="https://player.vimeo.com/video/57909935?loop=1"
                        className="big-video"
                        title="coc"
                        frameBorder="0"
                        allow="fullscreen"
                        allowFullScreen></iframe>
            </div>
        </section>
    )
}