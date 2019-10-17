import $ from 'jquery';

const url = "https://script.google.com/macros/s/AKfycbyRJ-j28N1Z-VrUO0q8VzD6q4He5TaKRl3fUM1G6OFJlGgkARw/exec";

const calcTime = (dateObject) => {
    let hours = dateObject.getHours();
    hours = hours < 10 ? (
        !hours ? "12" : "0" + hours.toString()
    ) : hours.toString();

    let minutes = dateObject.getMinutes() + 1;
    minutes = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    
    let seconds = dateObject.getSeconds() + 1;
    seconds = seconds < 10 ? "0" + seconds.toString() : seconds.toString();

    let month = dateObject.getMonth() + 1;
    month = month < 10 ? "0" + month.toString() : month.toString();

    let date = dateObject.getDate() + 1;
    date = date < 10 ? "0" + date.toString() : date.toString();

    let year = dateObject.getFullYear();

    return `${hours}:${minutes}:${seconds} ${month}/${date}/${year}`;
}

export const sendMessage = (data) => {
    const timestamp = calcTime(new Date());
    data.timestamp = timestamp;
    return $.ajax({
        url,
        method: "GET",
        dataType: "json",
        data
    })
}


    // https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175