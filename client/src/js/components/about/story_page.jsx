import React from 'react';
import NotFound from '../layouts/not_found';

export default (props) => {
    const {name, otherProps: {validNames}} = props;
    // if (validNames.has(name)) {
    //     return (
    //         <h1>HI</h1>
    //     )
    // } else {
    //     return <NotFound />
    // }
    return (
        <h1>HI</h1>
    )
}