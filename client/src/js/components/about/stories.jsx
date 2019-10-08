import React from 'react';

export default (props) => (
    // TODO: Eventually, this stories splash will become the same for all detail pages.
    <div className="stories">
        <section className="stories-splash"></section>
    
        <section className="stories-content">
            {/* TODO */}
            {/* This is assuming there are a fixed amount of stories, that are all text-based, not video. */}
            {/* Eventually, this will need to fetch from the express backend, which will need to access a database (MongoDB).
            the JSON object representing a story will need to look like the following:
            {name: "Rob Jones",
            videoUrl: null,
            content: "..."} */}
            <div className="stories-item"></div>
            <div className="stories-item"></div>
            <div className="stories-item"></div>
            <div className="stories-item"></div>
            <div className="stories-item"></div>
            <div className="stories-item"></div>
        </section>
    </div>
)