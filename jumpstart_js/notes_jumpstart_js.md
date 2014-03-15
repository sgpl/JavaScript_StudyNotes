## notes from the book : Jump Start JavaScript

<h4>quiz: </h4> 

- http://quizpoint.com/#categories/JAVASCRIPT

<h5>preface</h5>

- powerful, ubiquitous programming language
- oe
 of the most popular languages in the world
- all modern web browsers use js
- defacto scripting for the web


<h4>chapter 1</h4>

setting up: use web browser

chrome: option command j 
firefox: option command k 

also: inside an html file or linked from an html file


----

When a browser reads an HTML document, it converts the tags it encounters into an internal representation called the:
__DOM = Document Object Model__


- we can write js that interacts with html via manipulation of the DOM 
- if we access the DOM before the browser has finished building it, we get errors. 

- with a <__script__> tag in the docs head, the code will execute rightaway even if the DOM is yet to b built. and any reference to DOM elements will result in an error because the HTML inside the <body> isn't there yet. 

- to deal with ^ this, we can: 
	- wrap code in document's __onload__ function (which executes once the DOM has been constructed), or 
	- include <__script__> tags at the very end of the document's body before the closing of the body tag. 

- refer to chapter 1 for a more thorough read. 

###### ================================

<h4>chapter 2</h4>


<b>variables</b>

- stores data so that we can manipulate it. programming is essentially manipulation of data. 
- <b>camel casing</b>: first letter is lower case, the next word might be upper case
	- length, width, firstName, lastName, etc

<b>comments</b>

- // double slash 

- multiline comments: 
/*

*/


<b>declarations</b>

- declaring a variable
var task = "Task one goes here."; 

- can also do this: (declaring two variables at once)
var task = "Task one goes here.", 
	complete = true; 

<h6>note</h6> 
- js is case sensitive so Task != task 
- terminate lines with semi colon ';'

<b>declarations</b>

- good practice to keep declaration and initialization separate, so: 

// declarations
var task, complete;

// initialization
task = "first task"; 
complete = true;


<b>types</b>

- js is a loosely typed language unlike C or Java (which are strongly typed)
- don't need to be explicit about declaring types
- can change types of variables on the fly

<b>six types</b>: 

1. number, 
2. string, 
3. Boolean, 
4. null, 
5. undefined, and 
6. object

----

###### 1. number

- only numeric type in JavaScript
- can hold a set of all possible Number values including: 
Not-a-Number (NaN), positive, negative, infinity and negative infinity. 

- NaN: special value that is returned when math function fails, so (Math.abs("foo")), or when trying to parse a number fails. 
- also only value in JavaScript that doesn't equal itself so 
NaN == NaN and NaN === NaN return false
- there is an __isNaN__ fxn to verify if returned value is actually NaN. the return value of this function can be __confusing_


###### 2. string

- holds all possible string values

###### 3. Boolean

- true and false

###### 4. null

- when you want to declare a variable and intentionally express the absence of a value ( unlike undefined where the value is simply absent). 

###### 5. undefined

- represents the state of a variable that's been declared without a value being assigned to it. 

###### 6. object

- object is a collection of properties. the properties can be any of the previously mentioned types as well as other objects and functions. 


<h3>operations</h3>

var fname, lname, fullName;

fname = "John"; 
lname = "Smith";
fullName = fname + " " + lname; // full name is "John Smith"

---

var widgets, gizmos, inventory;

widgets = 333; 
gizmos = 234; 
inventory = widgets + gizmos; // sum of both

---

var provincial, federal, subtotal, total; 

provincial = 0.097; 
federal = 0.977; 
subtotal = 10; 
total = (subtotal * provincial) + (subtotal * federal); 

---

% is the symbol for modulus or remainder. 


----

<h5>dangers of loose typing</h5>

- can type strings instead of numbers. 

var johnTaskCount = 11,
    janeTaskCount = "42",
    totalTaskCount = johnTaskCount + janeTaskCount; // results in concatenation of 1142 instead of 53

<h4>type conversion (type coercion) </h4>

- converts number to string in case of conflict
- converts boolean to value 0 or 1 in case of addition

<h6>comparison operators</h6>

- less than, greater than is simple for 

----

== for boolean. // returns true if both values are true

1 == 1 	 	// true
"1" == 1 	// true because "1" converts to 1
1 == true 	// true
0 == false 	// true
"" == 0 	// true
" " == 0 	// true


0 == 1 		// false
1 == false 	// false
0 == true 	// false

var x, y;
x = {};
y = x;
x == y; 	// returns true (refers to same object in memory)
x == {};	// returns FALSE (## WHY?) (not the same object) wth?.

----

not equals != 

0 != 1     // returns true
1 != false // returns true
0 != true  // returns true


var x, y;  // declare x and y
x = {};
y = x;
x != y; 	// returns false (refers to same object in memory)
x != {};	// returns true (not the same object) ^ see the "==" stuff. 

---

strct equal (===)

- no conversion of types in a strict equal 

1 === 1 	// returns true
"1" === 1 	// returns false
1 === true  	// returns false
0 === false 	// returns false
"" === 0 	// returns false
"  " === 0  	// returns false
0 === 1 	// returns false
1 === false 	// returns false
0 === true 	// returns false

var x, y; 
x = {};
y = x; 
x === y;	// returns true (refers to same object in memory)
x === {};	// returns false (not same object)

---

strict not equals (!==)

1 !== 1 	// false
"1" !== 1 	// true
1 !== true  	// true
0 !== false 	// true
"" !== 0 	// true
"  " !== 0  	// true
0 !== 1 	// true
1 !== false 	//  true
0 !== true 	// true


var x, y;
x = {};
y = x;
x !== y;  // returns false (refers to same object in memory)
x !== {}; // returns true (not the same object)


---

1 > 1 // false
2 > " " // returns true because (" " converts to 0)

0 >= 1 // false
1 >= 1 // true
"1" >= 1 // true ("1" converts to 1)


--- 

<h5>logic flow</h5>

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

-----

__ternary operator__

- condition ? expression1 : expression2
- evaluates to expression1 when true and expression2 when false

// could do this
hours = (hours < 10) ? "0" + hours : hours.toString();

------
------

<h6>start of project</h6>

- task manager in js

var task1, task2, task3;

task1 = "Pay phone bill"; 
task2 = "Complete this book"; 
task3 = "Do something interesting with my life"; 

<h4>summary of chapter</h4>

- learned about variables, data types, operators, basic control flow. 
- these are building blocks of all JS programs
- review this sometime again as this is all critical info. 


###### ================================

<h4>chapter 3</h4>

<h6> Arrays </h6>

- creating an array 

var myArray = new Array();

OR

var myArray = [];

- [] notation is called the array literal and represents an empty array 
- safer to use array literal because Array constructor can be overwritten and potentially replaced with malicious code

var myArray = [3, 4, 6, 8, 2, 44];
var fruit = ["mango", "guava", "pineapple"];
var mixedCase = ["mango", 34, 4, 5,  "guava", 455, "pineapple"];

<h6>adding to an array </h6>

- by index: // note indices start at 0

var myArray = [];
myArray[0] = "hello";
myArray[1] = "world!";

- can also have named indices // this creates associative array 
- associative arrays are discouraged. preferred way to store data with named indices is by using objects // in next chapter. 

var myArray = [];
myArray["fruit"] = "apple";
myArray["vegetable"] = "pumpkin";

- can also push objects, so 
myArray.push("newThing");


<h6>reading from array </h6>

// notice that a comma has been used. 
var myValue,
	myArray = ["Hello", "World", "I", "am", "an", "array"];

myValue = myArray[4]; // returns "an"


<h6>nested arrays</h6>

- arrays within arrays

var yusuf, dreamers;

yusuf = [];
dreamers = ["cobb", "arthur", "ariadne", "saito", "fischer"];

var x_dreamer = dreamers[1]; // arthur

======

what if dreamers wasn't a named array but merely defined inline?

var yusuf; 
yusuf = [["cobb", "arthur", "ariadne", "saito", "fischer"]];

how do we get arthur now?

var x_dreamer = yusuf[0][1]; // this is what i'd do. 


var reality = ["yusuf", ["arthur", ["eames", ["cobb", "ariadne", "saito", "fischer"]]]];

reality[0]; 			 // returns "yusuf" 
reality[1][0]; 			 // returns "arthur"
reality[1][1][0]; 		 // returns "eames"
reality[1][1][1][0]; 	 // returns "cobb"
reality[1][1][1][1]; 	 // returns "ariadne"
reality[1][1][1][2]; 	 // returns "saito"
reality[1][1][1][3]; 	 // returns "fischer" 

<h6>what can we do with arrays</h6>

- seven widely used mutator methods: 
	- __pop, push, reverse, sort, shift, splice, unshift__

- four widely used accessor methods:
	- __concat, join, slice, toString__

- other accessor methods: 
	- indexOf, lastIndexOf, 

- iteration methods: 
	- forEach, every, some, filter, map

- reduce, reduceRight iteration methods in JavaScript 1.8 or higher. 


<h6> mutator methods</h6>

- __pop__: removes last element and returns it 

var tasks = [
	"Pay phone bill", 
	"Write bestselling novel", 
	"Walk the dog"
	];

tasks.pop(); // returns "Walk the dog"

- __push__ : will add an item to the end of array and return array's new length // length is different than index

var tasks = [
	"Pay phone bill", 
	"Write bestselling novel", 
	"Walk the dog"
	];

tasks.push("Do something else"); // returns 4
/* task is now [
	"Pay phone bill", 
	"Write bestselling novel", 
	"Walk the dog",
	"Do something else"
	];
*/

- __reverse__ : reverses the order of items in an array 

tasks.reverse(); // assuming tasks is defined

- __shift__ : removes __first__ item in an array and returns it. like the opposite of __pop__

var tasks = [
	"Pay phone bill", 
	"Write bestselling novel", 
	"Walk the dog"
	];

tasks.shift(); // returns "Pay phone bill"


- __sort__ : sorts everything in ascending order
	- everything (numbers, strings, etc) is converted to strings and then compared. 

^^ so [3, 10, 1, 2] // sorting returns [1, 10, 2, 3] because lexically 10 comes before 2 because it starts with 1. 

^^ thankfully sort lets you pass in a custom comparison function: 

array.sort([compare]);
// allows us to compare stuff using our own compare criteria. 

- __splice__ : lets you perform selective surgery on an array, allowing you to simultaneously add and remove items from an array with just one command: 

array.splice(index, howMany[, element1, ...[, elementN]]);

var tasks = [
	"Pay phone bill", 
	"Write bestselling novel", 
	"Walk the dog"
];

tasks.splice(1, 1, "World domination");
// task is now: 
//	["Pay phone bill", 
//	"World domination", 
//	"Walk the dog"];


// what is happening above?

- start at index of 1, remove 1 item and then insert "World domination" in that position. 

// can also insert multiple: 
tasks.splice(1, 1, "World domination", "Rotate tires", "Hire hit squad");

// also this without inserting anything: 

task = tasks.splice(1, 1); 
// returns "Write best-selling novel"
alert("REMINDER! Don't forget to: " + task);


// __alert__ is the basic way to attract user's attention. 


- __unshift__ : adds one or more items to the beginning of the array and returns the array's new length: 

var tasks, len; 

tasks = [
	"Pay phone bill", 
	"Write best-selling novel", 
	"Walk the dog"
]; 

len = tasks.unshift("Defeat nemesis", "Pick up dry cleaning"); 

alert("You now have " + len + " tasks to complete: " + tasks.join(", "));


---

<h6>accessor methods</h6>

