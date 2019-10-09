import React from 'react';
import { convertString, historyPush } from '../reuse/utils';

export default ({label, links, dir}) => {
    return links ?
        <ul className={`hover-${dir}`} id={`${label}-${dir}`}>
            {links.map(el => {
                return <li className="hover-link" onClick={historyPush(`/${convertString(label)}/${convertString(el)}`)} key={`link-${el}`}><p>{el}</p></li>
            })}</ul> : null;   
}