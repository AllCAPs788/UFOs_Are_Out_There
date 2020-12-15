
//learn how to import and iterate through data.js table
/*Use a date form in your HTML document 
and write JavaScript code that will listen for events 
and search through the date/time column to find rows 
that match user input.*/
let tableData = data;
//better example from Day 3
let tbody = d3.select("tbody");

//let date_filter = date_filter.map(person => person.age);

let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form-control");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

}



  // Prevent the page from refreshing
  //d3.event.preventDefault();

  // Select the input element and get the raw HTML node
 

  // Print the value to the console
  console.log(runEnter);

// Clear the value from the text box
//d3.event.target.value = "";


    } 
    
// refer to Day 3, solved for exercise 9

