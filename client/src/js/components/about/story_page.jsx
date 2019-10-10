import React from 'react';
import NotFound from '../layouts/not_found';

export default (props) => {
    const {name, otherProps: {validNames}} = props;
    console.log(validNames);
    if (validNames.has(name)) {
        return (
            <h1>HI</h1>
        )
    } else {
        return <NotFound />
    }
    
}