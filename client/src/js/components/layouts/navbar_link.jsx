import React from 'react';
import {historyPush, convertString} from '../reuse/utils';
import HoverDropdown from '../reuse/hover_dropdown';

export default ({links = [], label}) => {
    const menu = label === "MENU" ? "navbar-right-menu navbar-right-link" : "navbar-right-link ";

    const trigger = field => e => {
        e.preventDefault();
        const dropdown = document.getElementById(`${label}-dropdown`);
        if (dropdown) {
            if (field) return dropdown.classList.add("hover-dropdown-display");
            dropdown.classList.remove("hover-dropdown-display");
        }
    }

    const click = label === "MENU" ? () => {} : () => historyPush(`/${convertString(label)}`)

    return (
        <>
            <li className={menu} onMouseOver={trigger(true)} onMouseLeave={trigger()}>
                <p onClick={click()}>{label}</p>
                <HoverDropdown links={links} label={label}/>
            </li>         
        </>
    )
}