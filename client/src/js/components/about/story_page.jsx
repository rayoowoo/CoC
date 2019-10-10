import React from 'react';
import NotFound from '../layouts/not_found';

export default (props) => {
    const { name: { name }, otherProps: { validNames, stories} } = props;

    console.log(stories);
    console.log(name);
    let content = null;
    if (name in stories) content = stories[name].content;
    return (
        <div className="story-page">
            <h1>{name}</h1>
            <p>{content}</p>
        </div>
    )

}