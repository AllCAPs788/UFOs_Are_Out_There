
//learn how to import and iterate through data.js table
/*Use a date form in your HTML document 
and write JavaScript code that will listen for events 
and search through the date/time column to find rows 
that match user input.*/
//let tableData = data;
//better example from Day 3

//let data = data;
//1. create table template
let tbody = d3.select("tbody");
data.forEach(obj => {
  let row = tbody.append("tr");
  Object.entries(obj).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

let button = d3.select("#filter-btn")
let form = d3.select("#datetime")
button.on("click", ufo_enter);
//form.on("change",ufo_enter);

function ufo_enter() {
  d3.event.preventDefault();
  let ufo_input = d3.select("#datetime");
  let inputValue = ufo_input.property("value");
  let filteredData = data.filter(obj => obj.datetime === inputValue);
  let table = d3.select("tbody");

  // remove any children from the list to
  table.html(""); 
  let tbody = d3.select("tbody");
  filteredData.forEach(obj => {
    let row = tbody.append("tr");
    Object.entries(obj).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};

// //2. get datetime for each object
// let date_filter = data.filter(obj => obj.datetime);
// console.log(date_filter)
// //repeat above line for each column name in data.js

// let city_filter = data.map(obj => obj.city);
// let state_filter = data.map(obj => obj.state);
// let shape_filter = data.map(obj => obj.shape);
// let duration_filter = data.map(obj => obj.durationMinutes);
// let comment_filter = data.map(obj => obj.comments);
// // let button = d3.select("#filter-btn");
// d3.selectAll("button").on("click", function() {
//   // What will be logged out? What is `this` in this case?
//   console.log(this);
//   // Answer: It will console log the `button` element.
// });

// //3. // Select the form
// let date_form = d3.select("#datetime");
// // let city_form = d3.select("#city");
// // let state_form = d3.select("#state");
// // let shape_form = d3.select("#datetime");
// // let duration_form = d3.select("#datetime");
// // let comment_form = d3.select("#datetime");

// //4. listen for events and search through the date/time
// //activities 4-5 on Day 3
// // Input fields can trigger a change event when new text is entered.
// date_form.on("change", function() {
//   var newText = d3.event.target.value;
//   console.log(date_form);
// // });
// let button = d3.select("#filter-btn");
// button.on("click", function() {
//   d3.select(button);
// });


// repeat for each column
// // Create event handlers for clicking the button or pressing the enter key

