import React from 'react';
import { historyPush, convertString, triggerHover } from '../reuse/utils';

export default () => {
    return (
        <>
            <li className="navbar-right-menu navbar-right-link"
                onMouseOver={triggerHover(true, "menu")}
                onMouseLeave={triggerHover(false, "menu")}>
                <i className="fa fa-bars"></i>
            </li>
        </>
    )
}