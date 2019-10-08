import React from 'react';

export default ({label, links}) => {
    return links ?
        <ul className="hover-dropdown" id={`${label}-dropdown`}>
            {links.map(el => {
                return <li key={`link-${el}`}>{el}</li>
            })}</ul> : null;   
}