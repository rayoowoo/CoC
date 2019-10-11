import React from 'react';
import NotFound from '../layouts/not_found';

export default (props) => {
    const { name: { name }, stories } = props;

    let content = null;
    if (name in stories) content = stories[name].content.split("/n").map(el => <p>{el}</p>);
    debugger

    return (
        <section className="stories-page">
            <h1>{name}</h1>
            {content}
        </section>
    )

}