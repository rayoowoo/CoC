import React, {useState} from 'react';

export default () => {
    const [url, setUrl] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        setUrl(e.target.value);
    }

    return (
        <section className="detail-page">
            <div className="detail-splash">
                <h2 className="head2">Admin</h2>
            </div>

            <section className="detail-content">
                <h1>HI</h1>
                <form onSubmit={handleSubmit}>
                    <label>Landing Splash Image</label>
                    <input onChange={handleChange} type="text"/>
                    <input type="submit"/>
                </form>
            </section>
        </section>
    )
}