## notes from the book : Jump Start JavaScript

<h4>quiz: </h4> 

- http://quizpoint.com/#categories/JAVASCRIPT

<h5>preface</h5>

- powerful, ubiquitous programming language
- one of the most popular languages in the world
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

----

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

