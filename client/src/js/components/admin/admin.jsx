import React, {useState} from 'react';
import {put, useFetch} from '../reuse/utils';

export default () => {
    const defaultPic = useFetch('/api/pictures/landing-splash') || {};
    const { url="" } = defaultPic;
    const [source, setSource] = useState(url);

    function handleSubmit(e) {
        e.preventDefault();
        const picture = defaultPic;
        picture.url = source;
        put('/api/pictures/landing-splash', picture)
    }

    function handleChange(e) {
        setSource(e.target.value);
    }

    return (
        <section className="detail-page">
            <div className="detail-splash">
                <h2 className="head2">Admin</h2>
            </div>

            <section className="detail-content admin-content">
                <form onSubmit={handleSubmit}>
                    <h3 className="head3">Landing Splash Image</h3>
                    <input onChange={handleChange} value={url} type="text"/>
                    <button className="button1">Submit</button>
                </form>
            </section>
        </section>
    )
}