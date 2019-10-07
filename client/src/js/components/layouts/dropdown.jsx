import React from 'react';

export default (props) => {
    const menu = props.label === "MENU" ? "navbar-right-menu" : "";
    console.log(props.links);

    const {links, label} = props;

    
    const listLinks = links ? 
    <ul className="dropdown">
    {links.map(el => {
        return <li key={`link-${el}`}>{el}</li>
    })}</ul> : null;

    return (
        <>
            <li className={menu}>{label}</li>
            {listLinks}
        </>
    )
}