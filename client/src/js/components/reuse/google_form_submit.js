import $ from 'jquery';

const ACTION = "https://script.google.com/macros/s/AKfycbyRJ-j28N1Z-VrUO0q8VzD6q4He5TaKRl3fUM1G6OFJlGgkARw/exec"

// const YEAR = "entry.922687844_year";
// const MONTH = "entry.922687844_month";
// const DAY = "entry.922687844_day";
// const FIRST_NAME = "entry.543024837";
// const LAST_NAME = "entry.1330132312";
// const GENDER = "entry.2098421359";
// const PHONE = "entry.415647988";
// const TEXT = "entry.500947940";
// const EMAIL = "entry.1683769067";
// const SCHOOL_YEAR = "entry.1870195278";
// const MAJOR = "entry.1134993473";
// const HOME_CITY = "entry.1009507685";
// const BERKELEY_HOUSING = "entry.1314664420";
// const INTERESTED = "entry.1515719734";
// const HOW_MET_US = "entry.207738836";
// const CLUB_MEMBERS = "entry.1793097082";
// const COMMENTS = "entry.1482121524" ;

export const sendMessage = (year, month, day, firstName, lastName, gender, phone, text, email, schoolYear,
    major, homeCity, berkeleyHousing, interested, howMetUs, clubMembers, comments) => {

    const data = {year, month, day, firstName, lastName, gender, phone, text, email, schoolYear,
        major, homeCity, berkeleyHousing, interested, howMetUs, clubMembers, comments}

    return $.ajax({
        url: ACTION,
        method: "GET",
        dataType: "json",
        data: data
    })
}