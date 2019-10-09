import React from 'react';
import {historyPush, convertString, triggerHover} from '../reuse/utils';
import HoverDropdown from '../reuse/hover_dropdown';

export default ({links = [], label, dir, menu}) => {
    const className = menu ? "hover-link" : "navbar-right-link";
    return (
        <li className={className} onMouseOver={triggerHover(true, label, dir)} onMouseLeave={triggerHover(false, label, dir)}>
            <p onClick={historyPush(`/${convertString(label)}`)}>{label}</p>
            <HoverDropdown dir={dir} links={links} label={label}/>
        </li>         
    )
}