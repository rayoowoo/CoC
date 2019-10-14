import React from 'react';
import {historyPush} from '../reuse/utils';

export default (props) => {
    const { name: { name }, stories } = props;

    let content = null;
    if (name in stories) content = stories[name].content.split("/n").map(el => <p className="paragraph">{el}</p>);

    return (
        <section className="stories-page-content detail-content">
            <h2 className="head2">{name}</h2>
            {content}
            <button className="button1" onClick={historyPush('/about-us/our-stories')}>Back to stories</button>
        </section>
    )

}