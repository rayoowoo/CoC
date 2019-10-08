import React from 'react';
import {navigate} from 'hookrouter';

export default (props) => {
    const menu = props.label === "MENU" ? "navbar-right-menu navbar-right-link" : "navbar-right-link ";
    const {links, label, url} = props
   
    const listLinks = links ? 
    <ul className="hover-dropdown" id={`${label}-dropdown`}>
    {links.map(el => {
        return <li key={`link-${el}`}>{el}</li>
    })}</ul> : null;


    const trigger = e => {
        e.preventDefault();
        const dropdown = document.getElementById(`${label}-dropdown`);
        if (dropdown) dropdown.classList.add("hover-dropdown-display");
    }

    const removeTrigger = e => {
        e.preventDefault();
        const dropdown = document.getElementById(`${label}-dropdown`);
        if (dropdown) dropdown.classList.remove("hover-dropdown-display");
    }

    return (
        <>
            <li className={menu} onClick={() => navigate(`/${url}`)} onMouseOver={trigger} onMouseLeave={removeTrigger}>{label}
                {listLinks}
            </li>         
        </>
    )
}