// day 5 js fundamentals: scope

// - scope
// 	- determines accessibility of code
// 	- Global scope
// 		- any global variable or function is accessible by ALL code within the page (including 3rd party code)

// 	- Global scope is default 
// 		- every variable and function so far is global 


// var globalVar = "This is a global variable";

// var globalFunction = function(){
// 	alert(globalVar);
// 	globalVar = "Value of globalVar has been modified";
// };

// globalFunction();
// alert(globalVar);


//----------------------
// scope
// 	- Local (of functional scope)
// 		- variables and functions are limited to the function they are defined in. 
// 		- variables and functions cannnot be accesses from outside the function. 


var globalVar = "This is a global variable";

var globalFunction = function(){
	var localVar = "This is a local variable"
	alert(localVar);
	globalVar = "Value of globalVar has been modified";
};

globalFunction();

alert(localVar); // this results in an error as this is a local variable to the global function
alert(globalVar);
