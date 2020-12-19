
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
let form = d3.select("#new-id")
button.on("click", ufo_enter);
form.on("submit",ufo_enter);


function ufo_enter() {
  d3.event.preventDefault();
  let ufo_input = d3.select("#datetime");
  let inputValue = ufo_input.property("value");
  console.log(data[0].datetime, inputValue);
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
//check that allows for partial date input

