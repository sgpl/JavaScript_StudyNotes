// data type called Object (capital O)
// data types begin with an upper case letter

// String
// Number
// Boolean

// whenever a function name begins with a capital letter, we can think, this is a data type. we can also write our own data type. 

// pascal casing: (like camel casing, except for the first letter)
// TwoWords 

// everything inherits from Object

// Object had method toString() 
// so all objects have toString() method

// var num = 8; 
// str = num.toString(); // "8" converts object value to string. 

// ------

var person = new Object(); // constructor function. create object of type Object. 

// var str = new String();

// var str2 = new String("Hello World");
// var str2 = "Hello World"; // easier than the one above. 

person.firstName = "Sharad";
person.lastName = "Gopal";

person.getFullName = function() {
	return person.firstName + " " + person.lastName;
};

alert(person.getFullName());

