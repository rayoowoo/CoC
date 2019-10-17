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
                    <h1 className="head3">Today's date</h1>
                    <input type="date"
                    value={date}
                    onChange={handleChange("date")}/>

                    <h1 className="head3">First Name</h1>
                    <input type="text" 
                    value={firstName} 
                    onChange={handleChange("firstName")}/>

                    <h1 className="head3">Last Name</h1>
                    <input type="text" 
                    value={lastName} 
                    onChange={handleChange("lastName")}/>

                    <h1 className="head3">Gender</h1>
                    <input type="text" 
                    value={gender} 
                    onChange={handleChange("gender")}/>

                    <h1 className="head3">Phone</h1>
                    <input type="text" 
                    value={phone} 
                    onChange={handleChange("phone")}/>
                    
                    <h1 className="head3">Text NOT ok</h1>
                    <input type="text" 
                    value={text} 
                    onChange={handleChange("text")}/>
                    
                    
                    <h1 className="head3">Email address</h1>
                    <input type="text" 
                    value={email} 
                    onChange={handleChange("email")}/>
                    
                    
                    <h1 className="head3">year in fall 2019</h1>
                    <input type="text" 
                    value={schoolYear} 
                    onChange={handleChange("schoolYear")}/>
                    
                    
                    <h1 className="head3">Major</h1>
                    <input type="text" 
                    value={major} 
                    onChange={handleChange("major")}/>
                    
                    
                    <h1 className="head3">home city</h1>
                    <input type="text" 
                    value={homeCity} 
                    onChange={handleChange("homeCity")}/>
                    
                    
                    <h1 className="head3">berkeley housing</h1>
                    <input type="text" 
                    value={berkeleyHousing} 
                    onChange={handleChange("berkeleyHousing")}/>
                    
                    
                    <h1 className="head3">I am interested in</h1>
                    <input type="text" 
                    value={interested} 
                    onChange={handleChange("interested")}/>
                    
                    
                    <h1 className="head3">how did you meet us?</h1>
                    <input type="text" 
                    value={howMetUs} 
                    onChange={handleChange("howMetUs")}/>
                    
                    
                    <h1 className="head3">Have you met any club members?</h1>
                    <input type="text" 
                    value={clubMembers} 
                    onChange={handleChange("clubMembers")}/>
                    
                    
                    <h1 className="head3">Comments</h1>
                    <textarea type="text" 
                    value={comments} 
                    onChange={handleChange("comments")}/>

                    <input type="submit"/>
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