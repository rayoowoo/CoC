import React from 'react';
import { convertString, historyPush } from '../reuse/utils';

export default ({label, links}) => {
    return links ?
        <ul className="hover-dropdown" id={`${label}-dropdown`}>
            {links.map(el => {
                return <li onClick={historyPush(`/${convertString(label)}/${convertString(el)}`)} key={`link-${el}`}>{el}</li>
            })}</ul> : null;   
}