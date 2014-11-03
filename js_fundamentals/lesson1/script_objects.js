// working with objects 
// js is object oriented / object based language
// everything in javascript is an object


// objects have: 
// - properties: data related to an object. 
// - methods: actions that do something with the object or its data

// example: chair 
// - color black,wheeled legs, cushion seat. (these are properties)
// - can roll, can swivel, can rotate (methods)

var obj = "This is a string object.", 
	length = obj.length; // 24

var ixOf = obj.indexOf("is"); // camel casing of methods // searches for character of substring
// returns the index or position // index starts at 0


var index2 = obj.indexOf("is", ixOf + 1); // 5
var index3 = obj.lastIndexOf("is"); // searches last to first 
// can specify second parameter and do index of - 1 also

var index4 = obj.indexOf("this"); 
// -1 because negative one cannot be a valid index. 
 

alert(length);
alert(ixOf);
alert(index2);
alert(index4);
alert(index3);