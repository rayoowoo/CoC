import React from 'react';
import {historyPush} from '../reuse/utils';

export default () => (
    <div className="main-page notfound">
        <h1 className="head1">We're sorry.</h1>
        <h3 className="head3">Either this is not a page, or it has not been implemented yet.</h3>
        <button onClick={historyPush("/")} className="button1">Home</button>
    </div>
)