import React from 'react';
import { convertString, historyPush } from '../reuse/utils';

export default ({label, links, dir}) => {
    return links ?
        <ul className={`hover-${dir}`} id={`${label}-${dir}`}>
            {links.map(el => {
                return <li onClick={historyPush(`/${convertString(label)}/${convertString(el)}`)} key={`link-${el}`}>{el}</li>
            })}</ul> : null;   
}