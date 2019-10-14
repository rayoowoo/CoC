import React from 'react';
import {useFetch} from '../reuse/utils';
import StoryPage from './story_page';
import StoryTile from './story_tile';
import {useRoutes} from 'hookrouter';

const routes = {
    "/": () => stories => <StoryHome stories={stories}/>,
    "/:name": name => stories => <StoryPage name={name} stories={stories}/>
}

export default () => {
    const result = useFetch('/api/stories') || [];
    const stories = {};
    result.forEach(el => {
        stories[el.author] = el;
    });

    const route = useRoutes(routes)(stories);

    return <div className="detail-page">
        <section className="detail-splash stories-splash">
            <h2 className="head2">OUR STORIES</h2>
        </section>

        {route}
    </div>
}

function StoryHome ({stories}) {
    const allStories = Object.values(stories).slice(0, 6).map(el => {
        return <StoryTile key={el.id} story={el} />
    })

    return (
        <section className="stories-content detail-content">
            {/* TODO */}
            {/* This is assuming there are a fixed amount of stories, that are all text-based, not video. */}
            {/* Eventually, this will need to fetch from the express backend, which will need to access a database (MongoDB).
            the JSON object representing a story will need to look like the following:
            {name: "Rob Jones",
            videoUrl: null,
            content: "..."} */}

            <div className="tile-set">
                {allStories}
                <div className="tile stories-item"></div>
                <div className="tile stories-item"></div>
                <div className="tile stories-item"></div>
                <div className="tile stories-item"></div>
                <div className="tile stories-item"></div>
            </div>
        </section>
    )
}