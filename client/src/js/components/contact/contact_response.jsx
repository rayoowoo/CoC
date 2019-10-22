import React from 'react';
import {historyPush} from '../reuse/utils';

export default () => {
    return (
        <div className="contact-response">
            <h2 className="head2">Thank you for contacting us!</h2>
            <p className="paragraph">We hope to talk to you soon!</p>
            <button className="button1" onClick={historyPush("/contact-us")}>Return to form</button>
            <button className="button2" onClick={historyPush("/")}>Home</button>
        </div>
    )
}
