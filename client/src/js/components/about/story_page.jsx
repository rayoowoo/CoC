import React from 'react';
import NotFound from '../layouts/not_found';

export default (props) => {
    const {name: {name}, otherProps: {validNames}} = props;
    if (!validNames.has(name)) return <NotFound />;
    
    return (
        <h1>HI</h1>
    )

}