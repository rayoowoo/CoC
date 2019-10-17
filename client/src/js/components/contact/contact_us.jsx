import React, {useState} from 'react';
import {sendMessage} from '../reuse/google_form_submit';

export default () => {
    const [year, setYear] = useState("j");
    const [month, setMonth] = useState("j");
    const [day, setDay] = useState("j");
    const [firstName, setFirstName] = useState("j");
    const [lastName, setLastName] = useState("j");
    const [gender, setGender] = useState("j");
    const [phone, setPhone] = useState("j");
    const [text, setText] = useState("j");
    const [email, setEmail] = useState("j");
    const [schoolYear, setSchoolYear] = useState("j");
    const [major, setMajor] = useState("j");
    const [homeCity, setHomeCity] = useState("j");
    const [berkeleyHousing, setBerkeleyHousing] = useState("j");
    const [interested, setInterested] = useState("j");
    const [howMetUs, setHowMetUs] = useState("j");
    const [clubMembers, setClubMembers] = useState("j");
    const [comments, setComments] = useState("j");


    const setters = {
        setYear, setMonth, setDay, setFirstName, setLastName,setGender, setPhone, setText,
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
        sendMessage(year, month, day, firstName, lastName, gender, phone, text, email, schoolYear,
            major, homeCity, berkeleyHousing, interested, howMetUs, clubMembers, comments);
    }

    return (
        <section className="main-page">
            <div className="main-splash contact-splash">
                <h1 className="head1">contact us</h1>
            </div>

            <section className="main-content contact-content">
                <form onSubmit={handleSubmit}>
                    <h1>Today's date</h1>
                    <input type="text" 
                    name="year"
                    value={year} 
                    onChange={handleChange("year")}/>
                    <input type="text" 
                    name="month"
                    value={month} 
                    onChange={handleChange("month")}/>
                    <input type="text" 
                    name="day"
                    value={day} 
                    onChange={handleChange("day")}/>

                    <h1>First Name</h1>
                    <input type="text" 
                    name="firstName"
                    value={firstName} 
                    onChange={handleChange("firstName")}/>

                    <h1>Last Name</h1>
                    <input type="text" 
                    name="lastName"
                    value={lastName} 
                    onChange={handleChange("lastName")}/>

                    <h1>Gender</h1>
                    <input type="text" 
                    name="gender"
                    value={gender} 
                    onChange={handleChange("gender")}/>

                    <h1>Phone</h1>
                    <input type="text" 
                    name="phone"
                    value={phone} 
                    onChange={handleChange("phone")}/>
                    
                    <h1>Text NOT ok</h1>
                    <input type="text" 
                    name="text"
                    value={text} 
                    onChange={handleChange("text")}/>
                    
                    
                    <h1>Email address</h1>
                    <input type="text" 
                    name="email"
                    value={email} 
                    onChange={handleChange("email")}/>
                    
                    
                    <h1>year in fall 2019</h1>
                    <input type="text" 
                    name="schoolYear"
                    value={schoolYear} 
                    onChange={handleChange("schoolYear")}/>
                    
                    
                    <h1>Major</h1>
                    <input type="text" 
                    name="major"
                    value={major} 
                    onChange={handleChange("major")}/>
                    
                    
                    <h1>home city</h1>
                    <input type="text" 
                    name="homeCity"
                    value={homeCity} 
                    onChange={handleChange("homeCity")}/>
                    
                    
                    <h1>berkeley housing</h1>
                    <input type="text" 
                    name="berkeleyHousing"
                    value={berkeleyHousing} 
                    onChange={handleChange("berkeleyHousing")}/>
                    
                    
                    <h1>I am interested in</h1>
                    <input type="text" 
                    name="interested"
                    value={interested} 
                    onChange={handleChange("interested")}/>
                    
                    
                    <h1>how did you meet us?</h1>
                    <input type="text" 
                    name="howMetUs"
                    value={howMetUs} 
                    onChange={handleChange("howMetUs")}/>
                    
                    
                    <h1>Have you met any club members?</h1>
                    <input type="text" 
                    name="clubMembers"
                    value={clubMembers} 
                    onChange={handleChange("clubMembers")}/>
                    
                    
                    <h1>Comments</h1>
                    <textarea type="text" 
                    name="comments"
                    value={comments} 
                    onChange={handleChange("comments")}/>

                    <input type="submit"/>
                </form>
            </section>
        </section>
    )
}