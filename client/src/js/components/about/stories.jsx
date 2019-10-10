import React from 'react';
import {useFetch} from '../reuse/utils';
import StoryPage from './story_page';
import StoryTile from './story_tile';
import {useRoutes} from 'hookrouter';

const routes = {
    "/": () => props => <StoryHome otherProps={props}/>,
    "/:name": name => props => <StoryPage name={name} otherProps={props}/>
}

export default () => {
    // TODO: Eventually, this stories splash will become the same for all detail pages.

    const result = useFetch('/api/stories') || [];
    const validNames = new Set();
    const stories = {};
    result.forEach(el => {
        validNames.add(el.author);
        stories[el.author] = el;
    });

    return useRoutes(routes)({
        stories,
        validNames
    });   
}

function StoryHome ({otherProps}) {
    const {stories, validNames} = otherProps;

    const allStories = stories.map(el => {
        return <StoryTile key={el.id} validNames={validNames} story={el} />
    })

    return <div className="stories">
        <section className="stories-splash">
            <h1>OUR STORIES</h1>
        </section>

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
    </div>
}