import React from 'react';

export default (props) => {
    return ( 
        <section className="detail-page">
            <div className="detail-splash bible-studies-splash">
                <h2 className="head2">Bible Studies</h2>
            </div>

            <section className="detail-content bible-studies-content">
                <p className="paragraph">This semester we are covering:</p>
                <h1 className="head1">Matthew</h1>
                <h3 className="head3">"Man shall not live on bread alone,
                    but on every word that proceeds out through the mouth of God" (4:4)</h3>

                <p className="paragraph">Matthew is the first of the four Gospels, as well as the opening book of 
                    the entire New Testament. Through the biography of Jesus Christ, Matthew 
                    presents this wonderful picture of God incarnated as a man to minister life 
                    to us through His speaking, to be our King-Savior through His death and 
                    resurrection, and to be our Emmanuel—God with us. </p>

                <p className="paragraph">Come learn about all these amazing aspects of our Lord Jesus in our weekly
                     Bible studies! We have Bible studies at the following times/places every week: </p>

                <h3 className="head3">TUESDAY:</h3>
                <p className="paragraph">2:00 - 3:00 pm</p>
                <p className="paragraph">Campanile Esplanade</p>
                <p className="paragraph">Contact Kevin at (916) 879-4369</p>

                <h3 className="head3">WEDNESDAY:</h3>
                <p className="paragraph">1:00 - 2:00 pm</p>
                <p className="paragraph">Eshleman Hall</p>
                <p className="paragraph">Contact Grace at (714) 220-7702</p>

                <h3 className="head3">THURSDAY:</h3>
                <p className="paragraph">8:00 - 9:00 pm</p>
                <p className="paragraph">{'Dana & Haste (near unit 3)'}</p>
                <p className="paragraph">Contact Alex at (909) 802-5652</p>

                <h2 className="head2">This is what we covered last semester in 1 Corinthians!</h2>

                <iframe className="small-video" id="ytplayer" type="text/html"
                    src={`https://www.youtube.com/embed/?listType=playlist&list=PLeWer7-X-8P0Zfb7VqUa6rMjoisbiWD3k`}
                    frameBorder="0" allowFullScreen>
                </iframe>
            </section>
        </section>
    )
}