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
    // TODO: Eventually, this stories splash will become the same for all detail pages.

    const result = useFetch('/api/stories') || [];
    const stories = {};
    result.forEach(el => {
        stories[el.author] = el;
    });

    const route = useRoutes(routes)(stories);

    return <div className="stories">
        <section className="stories-splash">
            <h1>OUR STORIES</h1>
        </section>

        {route}
    </div>
}

function StoryHome ({stories}) {
    const allStories = Object.values(stories).slice(0, 6).map(el => {
        return <StoryTile key={el.id} story={el} />
    })

    return (
        <section className="stories-content">
            {/* TODO */}
            {/* This is assuming there are a fixed amount of stories, that are all text-based, not video. */}
            {/* Eventually, this will need to fetch from the express backend, which will need to access a database (MongoDB).
            the JSON object representing a story will need to look like the following:
            {name: "Rob Jones",
            videoUrl: null,
            content: "..."} */}
            {allStories}
            <div className="stories-item"></div>
            <div className="stories-item"></div>
            <div className="stories-item"></div>
            <div className="stories-item"></div>
            <div className="stories-item"></div>
        </section>
    )
}