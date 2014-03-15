// to run, copy code to firefox editor and press "RETURN"


// declaring variables d, hoursm minutes, time, message
var d, hours, minutes, time, message; 

// get current time's hour and minute components
d = new Date(); // not clear what is happening here? does Date have hours and minutes?
hours = d.getHours();
minutes = d.getMinutes();

// make sure that the hour is a double digit string
if (hours < 10) { 
	hours = "0" + hours; // converts hours into string
} else {
	hours = hours.toString(); // toString converts to string
}

// Make sure that the minutes are a double digit string
if (minutes < 10) {
	minutes = "0" + minutes; // converts to string 
} else {
	minutes = minutes.toString();
}

// COncatenate hours and minutes into a quadruple digit number
// representing the time in 24 hours format

// time = hours + ":" + minutes; // this is what i think i'd do

// actual: adds string and converts to nos. 
time = Number(hours + minutes); 

// logic flow for time 
if (time >= 0000 && time < 1200) {
	message = "Good Morning!";
} else if (time >= 1200 && time < 1700) {
	message = "Good Afternoon!";
} else if (time >= 1700 && time < 2100) {
	message = "Good evening!";
} else if (time >= 2100 && time < 2359) {
	message = "Good night!";
} 

alert(message);