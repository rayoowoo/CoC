import React from 'react';
import {historyPush} from '../reuse/utils';

export default ({story}) => {
    return (
        <div onClick={historyPush(`/about-us/our-stories/${story.author}`)} className="tile stories-item">
            <h3 className="head3">{story.author}</h3>
        </div>
    )
}