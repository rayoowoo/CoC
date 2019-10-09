import React from 'react';
import {historyPush, convertString, triggerHover} from '../reuse/utils';
import HoverDropdown from '../reuse/hover_dropdown';

export default ({links = [], label}) => {
    return (
        <>
            <li className="navbar-right-link" onMouseOver={triggerHover(true, label)} onMouseLeave={triggerHover(false, label)}>
                <p onClick={historyPush(`/${convertString(label)}`)}>{label}</p>
                <HoverDropdown links={links} label={label}/>
            </li>         
        </>
    )
}