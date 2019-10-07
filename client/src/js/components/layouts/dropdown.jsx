import React from 'react';

export default (props) => {
    const menu = props.label === "MENU" ? "navbar-right-menu navbar-right-link" : "navbar-right-link ";
    const {links, label} = props
   
    const listLinks = links ? 
    <ul className="dropdown" id={`${label}-dropdown`}>
    {links.map(el => {
        return <li key={`link-${el}`}>{el}</li>
    })}</ul> : null;


    const trigger = e => {
        e.preventDefault();
        const dropdown = document.getElementById(`${label}-dropdown`);
        if (dropdown) dropdown.classList.add("display");
    }

    const removeTrigger = e => {
        e.preventDefault();
        const dropdown = document.getElementById(`${label}-dropdown`);
        if (dropdown) dropdown.classList.remove("display");
    }

    return (
        <>
            <li className={menu} onMouseOver={trigger} onMouseLeave={removeTrigger}>{label}
                {listLinks}
            </li>         
        </>
    )
}