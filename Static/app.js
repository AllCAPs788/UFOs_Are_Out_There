// from data.js
let tableData = data({
    //example of data pairing from data.js
    datetime: "1/13/2010",
    city: "gulf breeze",
    state: "fl",
    country: "us",
    shape: "unknown",
    durationMinutes: "4 minutes",
    comments: "Bright orange object&#44 rapid speed and direction changes .."




});
joinedArray = tableData.join(", ");
// YOUR CODE HERE!

//create element statement from w3 for HTML DOM
let x = document.createElement("TH");