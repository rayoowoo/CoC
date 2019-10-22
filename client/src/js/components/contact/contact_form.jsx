import React, {useState} from 'react';
import {sendMessage} from '../reuse/google_form_submit';
import { historyPush } from '../reuse/utils';

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
    const [interested, setInterested] = useState(new Set());
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
            let input = e.target.value;
            if (field === "text") {
                input = text === "" ? "NOT" : "";
            } else if (field === "interested") {
                const newSet = interested;
                if (interested.has(input)) {
                    newSet.delete(input);
                } else {
                    newSet.add(input);
                }
                input = newSet;
            } 
            setters["set" + field[0].toUpperCase() + field.slice(1)](input);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const interests = Array.from(interested).join(", ");
        sendMessage({date, firstName, lastName, gender, phone, text, email, schoolYear,
            major, homeCity, berkeleyHousing, interests, howMetUs, clubMembers, comments}).then(() => {
                historyPush('/contact-us/response')(e);
            });
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div>
                <p className="paragraph">Today's date</p>
                <input type="date"value={date} onChange={handleChange("date")}/>
            </div>
            
            <section className="contact-form-flex">
                <div className="contact-form-field contact-first-name">
                    <p className="paragraph">First Name</p>
                    <input type="text" value={firstName} onChange={handleChange("firstName")} />
                </div>

                <div className="contact-form-field contact-last-name">
                    <p className="paragraph">Last Name</p>
                    <input type="text" value={lastName} onChange={handleChange("lastName")} />
                </div>

                <div className="contact-form-field contact-gender">
                    <p className="paragraph">Gender</p>
                    <select onChange={handleChange("gender")}>
                        <option selected={gender === "" ? true : false} disabled value="">Select</option>
                        <option selected={gender === "M" ? true : false} value="M">M</option>
                        <option selected={gender === "F" ? true : false} value="F">F</option>
                    </select>

                </div>
            </section>

            <section>
                <p className="paragraph">Phone</p>

                <div className="contact-form-field contact-contact-info">
                    <input type="text" value={phone} onChange={handleChange("phone")}/>
                    <input checked={text === "NOT" ? true : false} type="checkbox" onChange={handleChange("text")}/>
                    <p>Text NOT ok</p>
                </div>        
            </section>
            
            <div className="contact-form-field contact-email">
                <p className="paragraph">Email address</p>
                <input type="email" value={email} onChange={handleChange("email")} />
            </div>

            <section className="contact-form-flex">
                <div className="contact-form-field">
                    <p className="paragraph">Year in fall 2019</p>
                    <select onChange={handleChange("schoolYear")}>
                        <option selected={schoolYear === "" ? true : false} disabled value="">Select</option>
                        <option selected={schoolYear === "Freshman" ? true : false} value="Freshman">Freshman</option>
                        <option selected={schoolYear === "Sophomore" ? true : false} value="Sophomore">Sophomore</option>
                        <option selected={schoolYear === "Junior" ? true : false} value="Junior">Junior</option>
                        <option selected={schoolYear === "Junior (transfer)" ? true : false} value="Junior (transfer)">Junior (transfer)</option>
                        <option selected={schoolYear === "Senior" ? true : false} value="Senior">Senior</option>
                        <option selected={schoolYear === "Senior+" ? true : false} value="Senior+">Senior+</option>
                        <option selected={schoolYear === "Graduate Student" ? true : false} value="Graduate Student">Graduate Student</option>
                        <option selected={schoolYear === "Visitor" ? true : false} value="Visitor">Visitor</option>
                        <option selected={schoolYear === "Other" ? true : false} value="Other">Other</option>
                    </select>
                </div>

                <div className="contact-form-field">
                    <p className="paragraph">Major</p>
                    <input type="text" value={major} onChange={handleChange("major")}/>
                </div>
            </section>

            <section className="contact-form-flex">
                <div className="contact-form-field">
                    <p className="paragraph">Home city</p>
                    <input type="text" value={homeCity} onChange={handleChange("homeCity")}/>
                </div>

                <div className="contact-form-field">
                    <p className="paragraph">Berkeley housing</p>
                    <select onChange={handleChange("berkeleyHousing")}>
                        <option selected={berkeleyHousing === "" ? true : false} disabled value="">Select</option>                                
                        <option selected={berkeleyHousing === "Unit 1" ? true : false} value="Unit 1">Unit 1</option>
                        <option selected={berkeleyHousing === "Unit 2" ? true : false} value="Unit 2">Unit 2</option>
                        <option selected={berkeleyHousing === "Unit 3" ? true : false} value="Unit 3">Unit 3</option>
                        <option selected={berkeleyHousing === "Blackwell" ? true : false} value="Blackwell">Blackwell</option>
                        <option selected={berkeleyHousing === "Foothill, Stern" ? true : false} value="Foothill, Stern">Foothill, Stern</option>
                        <option selected={berkeleyHousing === "Clark Kerr" ? true : false} value="Clark Kerr">Clark Kerr</option>
                        <option selected={berkeleyHousing === "Off-campus" ? true : false} value="Off-campus">Off-campus</option>
                        <option selected={berkeleyHousing === "Commuting" ? true : false} value="Commuting">Commuting</option>
                        <option selected={berkeleyHousing === "Other" ? true : false} value="Other">Other</option>
                    </select>
                </div>
            </section>

            <div className="contact-form-field contact-interests">
                <p className="paragraph">I am interested in</p>
                <label className="paragraph"><input selected={interested.has("Bible Studies") ? true : false} type="checkbox" name="interests" value="Bible Studies" onChange={handleChange("interested")} />Bible Studies</label>
                <label className="paragraph"><input selected={interested.has("Fellowship in 2s and 3s") ? true : false} type="checkbox" name="interests" value="Fellowship in 2s and 3s" onChange={handleChange("interested")} />Fellowship in 2s and 3s (prayer and companionship to strengthen your Christians faith)</label>
                <label className="paragraph"><input selected={interested.has("Dinner and fellowship in homes") ? true : false} type="checkbox" name="interests" value="Dinner and fellowship in homes" onChange={handleChange("interested")} />Dinner and fellowship in homes (a home-cooked meal, singing, and fellowship</label>
                <label className="paragraph"><input selected={interested.has("Sunday morning service") ? true : false} type="checkbox" name="interests" value="Sunday morning service" onChange={handleChange("interested")} />Sunday morning service</label>
            </div>

            <div className="contact-form-field">
                <p className="paragraph">How did you meet us?</p>
                <select onChange={handleChange("howMetUs")}>
                    <option selected={howMetUs === "" ? true : false} disabled value="">Select</option>
                    <option selected={howMetUs === "Golden Bear Orientation" ? true : false} value="Golden Bear Orientation">Golden Bear Orientation</option>
                    <option selected={howMetUs === "Table on campus" ? true : false} value="Table on campus">Table on campus</option>
                    <option selected={howMetUs === "Flyer" ? true : false} value="Flyer">Flyer</option>
                    <option selected={howMetUs === "Friend" ? true : false} value="Friend">Friend</option>
                    <option selected={howMetUs === "Website" ? true : false} value="Website">Website</option>
                    <option selected={howMetUs === "Other" ? true : false} value="Other">Other</option>
                </select>
            </div>

            <div className="contact-form-field">
                <p className="paragraph">Have you met any club members?</p>
                <input type="text" value={clubMembers} onChange={handleChange("clubMembers")}/>
            </div>

            <div className="contact-form-field">
                <p className="paragraph">Comments</p>
                <textarea type="text" value={comments} onChange={handleChange("comments")}/>
            </div>

            <button className="button1">Submit</button>

        </form>
    )
}