import React from 'react';

export default (props) => {
    return ( 
        <section className="detail-page">
            <div className="detail-splash bible-studies-splash">
                <h1>Bible Studies</h1>
            </div>

            <section className="detail-content bible-studies-content">
                <p>This semester we are covering:</p>
                <h1>Matthew</h1>
                <h2>"Man shall not live on bread alone,
                    but on every word that proceeds out through the mouth of God" (4:4)</h2>

                <p>Matthew is the first of the four Gospels, as well as the opening book of 
                    the entire New Testament. Through the biography of Jesus Christ, Matthew 
                    presents this wonderful picture of God incarnated as a man to minister life 
                    to us through His speaking, to be our King-Savior through His death and 
                    resurrection, and to be our Emmanuel—God with us. </p>

                <p>Come learn about all these amazing aspects of our Lord Jesus in our weekly
                     Bible studies! We have Bible studies at the following times/places every week: </p>

                <h2>TUESDAY:</h2>
                <p>2:00 - 3:00 pm</p>
                <p>Campanile Esplanade</p>
                <p>Contact Kevin at (916) 879-4369</p>

                <h2>WEDNESDAY:</h2>
                <p>1:00 - 2:00 pm</p>
                <p>Eshleman Hall</p>
                <p>Contact Grace at (714) 220-7702</p>

                <h2>THURSDAY:</h2>
                <p>8:00 - 9:00 pm</p>
                <p>{'Dana & Haste (near unit 3)'}</p>
                <p>Contact Alex at (909) 802-5652</p>

                <h3>This is what we covered last semester in 1 Corinthians!</h3>

                <iframe id="ytplayer" type="text/html"
                    src={`https://www.youtube.com/embed/?listType=playlist&list=PLeWer7-X-8P0Zfb7VqUa6rMjoisbiWD3k`}
                    frameBorder="0" allowFullscreen>
                </iframe>
            </section>
        </section>
    )
}