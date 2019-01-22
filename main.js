//Setup a simple application with just index.html and main.js (no browserify/grunt and no React).

//1) This application should display the current date & time on the DOM
//2) There should be a button that when clicked, updates the current date & time on the DOM
//3) Push it up to Github 
//4) Once you are finished, slack Emily or Leah your repo link

//*notes: this is a simple web application, so you will need to run the http server

let button = document.createElement("button");
button.textContent = "Display Current Date and Time";

let dateButton = document.querySelector("#dateBtn");

var date = new Date ();
let handleButtonClick = () => document.querySelector("#output").innerHTML = date;

button.addEventListener("click", handleButtonClick);

dateButton.appendChild(button);

//console.log(new Date)
