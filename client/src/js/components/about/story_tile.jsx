import React from 'react';
import {historyPush} from '../reuse/utils';

export default ({story}) => {
    return (
        <div onClick={historyPush(`/about-us/our-stories/${story.author}`)} className="stories-item">
            
        </div>
    )
}