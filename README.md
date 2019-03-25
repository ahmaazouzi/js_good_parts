# js_good_parts

Notes on or summary of **Crockford's** famed **_Javascript, the Good Parts!_** This can be read as a preview of what I think is a worth reading book. Does JSTGP really needs a summary? It's one of the thinnest programming books out there. I would encourage all users of js to read this book. It's not only informative and short. It's very funny and the writing is very clear and to the point.

[Chapter 1: Good Parts](##-Chapter-1:-Good-Parts)
[Chapter 2: Grammar](##-Chapter-2:-Grammar) 
[Chapter 3: Objects](##-Chapter-3:-Objects)
[Chapter 4: Functions](##-Chapter-4:-Functions)
[Chapter 5: Inheritance](##-Chapter-5:-Inheritance)
[Chapter 6: Arrays](##-Chapter-6:-Arrays)
[Chapter 7: Regular Expressions](##-Chapter-7:-Regular-Expressions)
[Chapter 8: Methods](##-Chapter-8:-Methods)
[Chapter 9: Style](##-Chapter-9:-Style)
[Chapter 10: Beautiful Parts](##-Chapter-10:-Beautiful-Parts)

## Chapter 1: Good Parts
- Javascript is a beautiful language buried under a "steaming pile of good intetions and blunders."
- Js is Lisp in C's clothing.
- Js has many bads parts and design issues. It still has its fair share of good parts. Crockford suggests using a subset of the language that is entirely made of those good parts, ignoring the restp. 
- The book is about the language and not about the DOM or AJAX. 
- Lambdas were built into the language from the beginning. They are a good parts.
- Other good parts include: loose typing, dynamic objects, an expressive object literal notation.
- Bad parts include global variables.

## Chapter 2: Grammar
- Javascript shares many syntactic details with other C-like languages like Java. I will only focus on the details where js really differs from those languages.

### Numbers:
- All numbers are 64-bit floating point numbers.
- **NaN** is a number that's not equal to any value including itself. **isNaN(_number_)** is used to determine if a number is NaN. 
- Js has an object Math which has methods for manipulating numbers.

### Strings:
- No character type. A character can be represented by a single character in a string.
- A js character is 16-bit wide.
- Strings are immutable and + is used for concatenation. String.length 

### Statments:
- A **block** (a group of statements enclosed by squiggly brackets) **DOES NOT** create a new scope.
- The **for in** construct (also available in python as well) is present in js and can be used this way:
```
for (myvar in obj){
	if (obj.hasOwnProperty(myvar)){
		...
	}
}
```
- Js uses '===' for equality instead of the more familiar '=='.
## Chapter 3: Objects

### Expressions:
- An expression is a statment that **gives a value**???!!!! (It works on a value). Assigning a value to a variable, invoking a method or deleting a property from an object are all examples of an expression. 
- Expressions also include built in values such as (null, NaN, Infinity, true, false, undefined).
- **typeof(_variable_)** produces one of 6 values: 'number', 'string', 'boolean', 'undefined', 'function', 'object'.


### Literals:
- Object literals are convenient and clever way to define new objects.
- Property names can be names or strings, so:
```
book1: {
	title: "Javascript, the Good Parts"
	edition: 2
}
```
is the same as:
```
book1: {
	"title": "Javascript, the Good Parts"
	"edition": 2
}
```
- property "names are treated as literal names, not as variable names," (I have no idea what this means. It might have to do with the fact that trying to extract the value of a propertu using brackets requires the use of a string for the property name, not plain name).

## Chapter 3: Objects
- types like number, string are object-like in that they have methods, but they are immutable. Objects like functions, arrays and objects are **"mutable keyed collections."**
- An object is a container of properties. Each property has a name and a value. A name     vv  can be any string including an empty string. A value can be of any value except _underfined.-
- Prototype linkeage allows an object to inherit the properties of another onject.

### Object Literals:
- Objects can be nested.
- Property names must be enclosed in quotes if they are not legal or are reserved names. 


## Chapter 4: Functions

## Chapter 5: Inheritance

## Chapter 6: Arrays

## Chapter 7: Regular Expressions

## Chapter 8: Methods

## Chapter 9: Style

## Chapter 10: Beautiful Parts
 

