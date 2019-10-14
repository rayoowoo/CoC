import React from 'react';
import {historyPush} from '../reuse/utils';

export default (props) => (
    <div className="main-page">
        {/* TODO:
        This about splash will eventually become the same for all general pages. */}
        <section className="main-splash about-splash">
            <h1 className="head1">who are we?</h1>
        </section>

        <div className="main-content about-content">
            <h2 className="head2">WE ARE</h2>
            <section className="about-we-are">
                <div>
                    <p className="paragraph">a student group composed of believers in Christ from various backgrounds, and we stand absolutely
                    for the faith common to all Christians. We love the Lord Jesus Christ, endeavor to give Him “the first
                    place in all things” (Col. 1:18), and have the utmost respect for His Word. We meet simply as Christians
                    without any denominational affiliation because we treasure the testimony of the oneness of the Body of Christ,
                    and our desire is to cooperate with Him for the accomplishment of God’s eternal purpose (Eph. 3:11) by ministering
                    the unsearchable riches of Christ (Eph. 3:18) for the building up of the Body of Christ (Eph. 4:12).
                    </p>

                    <p className="paragraph">We warmly receive all believers as our brothers and sisters in Christ and seek to maintain the oneness
                    of the Spirit by keeping our focus on Christ. In addition to pursuing fellowship, we also desire to
                    strengthen and spread the Lord’s testimony on the UC Berkeley campus.
                    </p>
                </div>
                <img src="" alt="group-1" />
            </section>

            <section className="about-mission">
                <img src="" alt="group-2" />
                <div>
                    <h3 className="head3">Our Mission</h3>
                    <ul>
                        <li>To encourage members of this group to foster/develop their personal relationship with God,</li>
                        <li>To shepherd our members to gain both the objective knowledge and subjective experience of the truth in the Bible, </li>
                        <li>To endeavor to bring many others on this campus to a living knowledge of our Savior God.</li>
                    </ul>
                </div>
            </section>

            <section className="about-faith">
                <h3 className="head3">Our Faith</h3>
                <p className="paragraph">Christians on Campus at UC Berkeley members hold the faith which is common to all believers (Titus 1:4; Jude 3):</p>
                <ul>
                    <li className="paragraph bullets">The Bible is the complete divine revelation inspired word-by-word by God through the Holy Spirit (2 Pet. 1:21; 2 Tim. 3:16).</li>
                    <li className="paragraph bullets">God is uniquely one, yet triune — the Father, the Son, and the Spirit (1 Tim. 2:5a; Matt. 28:19).</li>
                    <li className="paragraph bullets">The Son of God, even God Himself, was incarnated to be a man by the name of Jesus Christ (John 1:1, 14).</li>
                    <li className="paragraph bullets">Christ died on the cross for our sins, shedding His blood for our redemption (1 Pet. 2:24; Eph. 1:7a).</li>
                    <li className="paragraph bullets">Christ resurrected from among the dead on the third day (1 Cor. 15:4).</li>
                    <li className="paragraph bullets">Christ ascended to the right hand of God to be Lord of all (Acts 1:9, 2:33, 36).</li>
                    <li className="paragraph bullets">Whenever any person repents to God and believes in the Lord Jesus Christ, he is regenerated (born again) and becomes a living member of the Body of Christ (Acts 20:21; John 3:3; Eph. 1:22-23; Rom. 12:5).</li>
                    <li className="paragraph bullets">Christ is coming again to receive His believers to Himself (1 Thes. 2:19).</li>
                </ul>
                
                <img src="" alt="group-3" />
            </section>


            <button className="button1 about-button" onClick={historyPush("/about-us/our-stories")}>See our stories</button>
        </div>
        
    </div>
)