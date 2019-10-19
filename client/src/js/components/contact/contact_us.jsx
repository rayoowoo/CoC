import React, {useState} from 'react';
import {sendMessage} from '../reuse/google_form_submit';
import {historyPush} from '../reuse/utils';

export default () => {
    const [date, setDate] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [schoolYear, setSchoolYear] = useState("");
    const [major, setMajor] = useState("");
    const [homeCity, setHomeCity] = useState("");
    const [berkeleyHousing, setBerkeleyHousing] = useState("");
    const [interested, setInterested] = useState("");
    const [howMetUs, setHowMetUs] = useState("");
    const [clubMembers, setClubMembers] = useState("");
    const [comments, setComments] = useState("");


    const setters = {
        setDate, setFirstName, setLastName,setGender, setPhone, setText,
        setEmail, setSchoolYear, setMajor, setHomeCity, setBerkeleyHousing, setInterested, setHowMetUs,
        setClubMembers, setComments
    }

    function handleChange(field) {
        return e => {
            e.preventDefault();
            setters["set" + field[0].toUpperCase() + field.slice(1)](e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendMessage({date, firstName, lastName, gender, phone, text, email, schoolYear,
            major, homeCity, berkeleyHousing, interested, howMetUs, clubMembers, comments}).then(() => {
                Object.values(setters).forEach( el => {
                    el("");
                });
                document.querySelector(".contact-form").classList.remove("contact-display");
                document.querySelector(".contact-response").classList.add("contact-display");
            });
    }

    function returnForm(e) {
        e.preventDefault();
        document.querySelector(".contact-response").classList.remove("contact-display");
        document.querySelector(".contact-form").classList.add("contact-display");
    }

    return (
        <section className="detail-page">
            <div className="detail-splash contact-splash">
                <h2 className="head2">contact us</h2>
            </div>

            <section className="detail-content contact-content">
                <form className="contact-display contact-form" onSubmit={handleSubmit}>
                    <div>
                        <p className="paragraph">Today's date</p>
                        <input type="date"value={date} onChange={handleChange("date")}/>
                    </div>
                    
                    <section className="contact-form-flex">
                        <div>
                            <p className="paragraph">First Name</p>
                            <input type="text" value={firstName} onChange={handleChange("firstName")} />
                        </div>

                        <div>
                            <p className="paragraph">Last Name</p>
                            <input type="text" value={lastName} onChange={handleChange("lastName")} />
                        </div>

                        <div>
                            <p className="paragraph">Gender</p>
                            <select onChange={handleChange("gender")}>
                                <option disabled value="">Select</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>

                        </div>
                    </section>

                    <section className="contact-form-flex">
                        <div>
                            <p className="paragraph">Phone</p>
                            <input type="text" value={phone} onChange={handleChange("phone")}/>
                        </div>

                        <div>
                            <p className="paragraph">Text NOT ok</p>
                            <input type="text" value={text} onChange={handleChange("text")}/>
                        </div>
                    </section>

                    <div>
                        <p className="paragraph">Email address</p>
                        <input type="text" value={email} onChange={handleChange("email")}/>
                    </div>

                    <section className="contact-form-flex">
                        <div>
                            <p className="paragraph">year in fall 2019</p>
                            <input type="text" value={schoolYear} onChange={handleChange("schoolYear")}/>
                        </div>

                        <div>
                            <p className="paragraph">Major</p>
                            <input type="text" value={major} onChange={handleChange("major")}/>
                        </div>
                    </section>

                    <section className="contact-form-flex">
                        <div>
                            <p className="paragraph">home city</p>
                            <input type="text" value={homeCity} onChange={handleChange("homeCity")}/>
                        </div>

                        <div>
                            <p className="paragraph">berkeley housing</p>
                            <input type="text" value={berkeleyHousing} onChange={handleChange("berkeleyHousing")}/>
                        </div>
                    </section>

                    <div>
                        <p className="paragraph">I am interested in</p>
                        <input type="text" value={interested} onChange={handleChange("interested")}/>
                    </div>

                    <div>
                        <p className="paragraph">how did you meet us?</p>
                        <input type="text" value={howMetUs} onChange={handleChange("howMetUs")}/>
                    </div>

                    <div>
                        <p className="paragraph">Have you met any club members?</p>
                        <input type="text" value={clubMembers} onChange={handleChange("clubMembers")}/>
                    </div>

                    <div>
                        <p className="paragraph">Comments</p>
                        <textarea type="text" value={comments} onChange={handleChange("comments")}/>
                    </div>

                    <button className="button1">Submit</button>
                </form>

                <div className="contact-response">
                    <h2 className="head2">Thank you for contacting us!</h2>
                    <p className="paragraph">We hope to talk to you soon!</p>
                    <button className="button1" onClick={returnForm}>Return to form</button>
                    <button className="button2" onClick={historyPush("/")}>Home</button>
                </div>
            </section>
        </section>
    )
}