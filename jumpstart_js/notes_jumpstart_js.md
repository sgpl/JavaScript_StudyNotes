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

- with a <script> tag in the docs head, the code will execute rightaway even if the DOM is yet to b built. and any reference to DOM elements will result in an error because the HTML inside the <body> isn't there yet. 

- to deal with ^ this, we can: 
	- wrap code in document's _onload_ function (which executes once the DOM has been constructed), or 
	- include <script> tags at the very end of the document's body before the closing of the body tag. 

- refer to chapter 1 for a more thorough read. 

----

