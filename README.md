# js_good_parts

Notes on or summary of **Crockford's** famed **_Javascript, the Good Parts!_** This can be read as a preview of what I think is a worth reading book. Does JSTGP really needs a summary? It's one of the thinnest programming books out there. I would encourage all users of js to read this book. It's not only informative and short. It's very funny and the writing is very clear and to the point.

- [Chapter 1: Good Parts](#chapter-1-good-parts)
- [Chapter 2: Grammar](#chapter-2-grammar) 
- [Chapter 3: Objects](#chapter-3-objects)
- [Chapter 4: Functions](#chapter-4-functions)
- [Chapter 5: Inheritance](#chapter-5-inheritance)
- [Chapter 6: Arrays](#chapter-6-Arrays)
- [Chapter 7: Regular Expressions](#chapter-7-regular-expressions)
- [Chapter 8: Methods](#chapter-8-methods)
- [Chapter 9: Style](#chapter-9-style)
- [Chapter 10: Beautiful Parts](#chapter-10-beautiful-parts)

## Chapter 1: Good Parts
- Javascript is a beautiful language buried under a "steaming pile of good intetions and blunders."
- Js is Lisp in C's clothing.
- Js has many bads parts and design issues. It still has its fair share of good parts. Crockford suggests using a subset of the language that is entirely made of those good parts, ignoring the rest. 
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

### Statements:
- A **block** (a group of statements enclosed by squiggly brackets) **DOES NOT** create a new scope.
- The **for in** construct (also available in python as well) is present in js and can be used this way:
```java
for (myvar in obj){
	if (obj.hasOwnProperty(myvar)){
		...
	}
}
```
- Js uses '===' for equality instead of the more familiar '=='.

## Chapter 3: Objects

### Expressions:
- An expression is a statement that **gives a value**???!!!! (It works on a value). Assigning a value to a variable, invoking a method or deleting a property from an object are all examples of an expression. 
- Expressions also include built in values such as (null, NaN, Infinity, true, false, undefined).
- **typeof(_variable_)** produces one of 6 values: 'number', 'string', 'boolean', 'undefined', 'function', 'object'.


### Literals:
- Object literals are convenient and clever way to define new objects.
- Property names can be names or strings, so:
```java
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
- An object is a container of properties. Each property has a name and a value. A name can be any string including an empty string. A value can be of any value except _undefined.-
- Prototype linkeage allows an object to inherit the properties of another object.

### Object Literals:
- Objects can be nested.
- Property names must be enclosed in quotes if they are not legal or are reserved names.

### Objects Behavior: 
- **Retrieving** data can always be done using **bracket notation.** If the property name is a string literal, a legal js name and not a reserved word, **dot notation** can be used to retrieve it.
- Trying to retrieve a non-existent property will result in **_undefined_**.
- Trying to retrieve data from undefined, results in error. By using **_&&_** operator, an errer can be avoided. Try to retrieve the property and (&&) nested properties to get undefined behavior instead of error.
- **Updating** a property's value can be done using assignment with both bracket and dot notation. If the property exists, it's old value is replaced. If it doesn't exist, the property is added to the object.
- Objects are **passed around by reference.**

### Prototype:
- "Every object is linked to a prototype object from which it can inherit properties."
- Object literals are linked to `Object.prototype`.
- The javascript **Object** object (or function???) has a method **create** which is used to create a new object using an "old object as its prototype" as in:
```
var book2 = Object.create(book1); // Now book2 has all the properties of book1
```
- Did the Object object (or function) have a create method when the book was written??!!
- Changing the property of an object doesn't affect the prototype (Sounds too obvious from an OOP perspective).
- **Delecation:*** If your try to retrieve a property from an object and the object doesn't have that property name, js looks at that object's prototype and sees if it has that property to retrieve its value. This process will continue until **Object.protptype** is reached reached. If the property name is not found in the prototype chain, the resulting value is **undefined**.
- If a property is added to a prototype, it's immediately visible to all the objects derived from it.

### Reflection:
- The **typeof** operator is used to get the properties of a property.
- **hasOwnProperty** method filters out properties derived from the prototype chain.

### Enumeration:
- An object's properties can be enumerated using the **for .. in**m statement.
- Sounds like ES5 doesn't suffer from some of the issues mentioned in this section like the fact that all properties would be listed, including fuctions inherited from Object. 

### Delete:
- Delete removes a property from an object but doesn't affect the prototype linkeage. If the property removed is present in the prototype chain, the value of that property "shines through."

### Global Abatment:
- Global variables are the bane of javascript. To reduce the problems associated with that, a single global variable can be created for the whole application. That single global should act as a container for the app. This is seems to be a standard practice nowadays with the use of app or APP in js applications.

```java
var APP = {};

APP.books = {
	something: "Something"
}

APP.authors = {
	something: "Something"
}
```

## Chapter 4: Functions

- Js functions are generally well designed, but they also have their terrible parts.
- They are used for "code reuse, information hiding and composition."
- They are used to specify the behavior of objects.

### Function Objects:
- Functions are objects linked to **Function.ptrototype**. Function.prototype itself is linked to **Object.prototype**. See [prototype](#prototype).
- Functions also have two hidden properties:
		1. The context of the function.
		2. The code that implements the function's behavior.
- A function also has a **prototype** property. This prototype property's value is a is an object which has a **constructor** property. This constructor property's value is the function itself.
- Functions are objects (first class citizens). They can be stored in variables, objects and arrays. They can be passed as arguments and returned by functions. They can also have methods. They also get invoked (that's special about functions).

### Function Literals:
- An example of a function literal:
```java
var name = function(first_name, last_name){
	return first_name + " " + last_name;
}
```
- A function is made of 4 parts:
	1. The `function` reserved word.
	2. The **function name**. This part is optional. It can be used for recursion and by debuggers and developer tools to identify the function. Functions without names are _anonynous_.
	3. A set of 0 or more **parameters** wrapped in parantheses. The function treats them as variables. They are initialized to the arguments given to the function.
	4. The **function body** wrapped into curly brackets which is a list of statements which are executed when the function is invoked.

### Invocation:
- When a function is invoked, control and parameters are passed to the new function. Two more parameters are passed to the invoked function, namely `this` and [`arguments`](#lala).
- There is no type checking of arguments and the mismatch between the parameter and argument lengths doesn't cause a runtime error. If there are less arguments than required, other parameters are initialized to _undefined._ If there are more arguments, they are ignored.
- The **this** parameter is essential to object oriented programming. Its value is determined by one of four invocation patterns:

#### 	1.The Method Invocation Pattern (and the meaning of `this`):
- When a function is the value of an object's property, it's called a method.
- When a method is invoked, `this` is bound to the object it is a property of.
- A method uses `this` to retrieve and modify its object's values as showin in the following example:
```java
var account = {
    balance: 0,
    addSomething : function(val){
        if (typeof this.balance === 'number')
            this.balance += val;
        else
            console.log("Not a valid value!!");
    }
};
```

#### 	2. The Function Invocation Pattern:
- When the function is not the property of an object, it's invoked as a function.
- When a function is invoked as a function, `this` is bound to the global object (kind of a bad part). An inner function within a method is not bound to the object which owns the method, but it's bound to the global object.
- The inner function doesn't have access to the `this` of the outer one, but this can be worked around by creating a variable (the name of this variable is usually `that`)in the outer function that stores `this` as in:
```java
var obj = {
    method : function(){
        var that = this;
        var inner_func = function(){
            console.log(that);
    	}
    	inner_func();
    }
};
```

#### 	3. The Constructor Invocation Pattern:
- Although the prototypical inheritence pattern of js is powerful, programmers choose the classical mode of languages like java. Javascript has a pseudoclassical mode for the classically minded. It's a Frankenstein designed to mimic the more familiar classical mode.
- When a function is called with the `new` prefix (this is a little vague! I need more clarification on this):
	- a new object is created with a link to the function's prototype member.
	- `this` is bound to the newly created object.
- Functions used with the `new` prefix are called _**constructors**_. 
- Constructor functions are always capitalized to stress their nature. 
- This invocation pattern is just bad. If a constructor function is invoked without a `new` prefix, bad things can happen. 
```java
var Animal = function(sound){
	this.sound = sound;
}

Animal.prototype.getSound = function(){
	return this.sound;
}

var cat = new Animal("meow");

console.log(cat.getSound());
```

#### 	4. The Apply Invocation Pattern:
- Because js is both oop and functional, a function can have methods.
- The **apply** method is a method available for functions that is used to invoke functions and allows one to choose the value of `this`. It takes two parameters, the first is the value to be bound to `this`, and the second one is an array of the function's arguments.
- An interesting feature of the apply method is it's ability to apply the method's of an object to another object resulting from the ability to choose `this`. 
```java
// Example 1
var printName = function(first_name, last_name){
	return first_name + " " + last_name;
} 
// Invoked printName with 'apply' using an array of arguments
printName.apply(null, ["Moby", "Dick"]);

// Example 2
var cat = {
	sound: "meow",
	makeSound: function(){
		console.log(this.sound)
	}
};

// Here 'this' was changed, so makeSound function, which belongs
// to the cat object, was applied to dog object which doesn't have that function.
var dog = {
	sound : "Howhow"
};

cat.makeSound.apply(dog);
```

### Arguments:
- In addition to the `this` parameter, the `arguments` array is available to a function when it's invoked. The `arguments` array gives the function access to the arguments supplied to the function including excess arguments. This is why a javascript function can "take an unspecified number of arguments." This allows for great flexibility.
```java
var meaningless = function(){
	console.log(arguments.length);
}

// This allows for a great amount 
meaningless("A", "b", 77);
meaningless();
```
- `arguments` is not an actual array but an array-like object, which is quite [problematic](#);

### Exceptions:
- Like Java and Python, js handles exceptions using the `throw` statement as in the following eample:

```java
// Handles division by zero
var divide = function(a, b){
	if (b === 0){
		throw {
			name: 'logicError',
			message: 'Can\'t divide by zero'
		};
	};

	return a / b;
};
```
- `throw` is given an object containging some information about the error, by convention, the error's name and message, but it can also have other information.
- A 'try' and `catch` block is used to catch the error. If an exception is thrown within a try statement, it is caught in the `catch` statement as in:
```java
var tryDivide = function(){
	try {
	    divide(5,0);
	} catch(e) {
	    console.log(e.name + ": " + e.message);
	};
};

tryDivide();
```

### Type Augmentation:
- Basic types can be augmented and acquire new functionality. The book gives some really good examples though they might be a little obscure. The bracket notation is confusing.
- The examples give, **<Type>.prototype** is augmented like in Number.prototype, Array.prototype, etc.

```java
Array.prototype.middle =  function(){
    return this[Math.floor((this.length - 1)/2)];
};

var a = [1,500000, 0];
a.middle();  //500000

```
### Scope:
- Javascript has function scope, but no block scope. Don't declare variables before use. ALWAYS define them at the top of the function.

### Closure:
- Closures in the context of js are confusing. I hope readig this section will clear things up for me.
- Inner functions enjoy access to out functions variables. They also have a longer lifespan, meaning that the inner continues to have access to the variables of the outer function even when the latter has already been executed.
- Access to outer function variables and the longer lifetime of the inner function allows us to protect data agaainst access from the global scope. They allow for creating effective setters and getters.
- An IIFE (immediately invoked function expression) is one way of exploiting these two useful features as in:

```java
// value can be altered from the outside wolrd.
var obj = {
	value: 0,
	increment: function(inc){
		value += inc;
	}
};

// Once obj is executed there is no way of acccessing value
// except through the setter "increment" and the getter "getValue"
var obj = (function(){
	value = 0;
	return {
		increment: function(inc){
			value += inc;
		},
		getValue: function(){
			return	value;
		}
	};
}());
```
- In an IIFE, the result of the execution of a function is assigned to a variable, not the function itself.
- In this example, a an object containing two functions which still have the access to the inner value of outer function is returned. There is no way of accessing the variable `value` except through these functions.
- A **closure** is an inner function that has access to the context where it was created or the outer function's variables. It has access to the actual variables and not copies of them.
- Closures are useful in the case of event handlers. I had to learn it the hard way. They are also used for data hiding as mentioned earlier.
- Using a closure to handle events that have to do DOM element arrays can be hairy, but probably a simple approach is to return an inner function which returns a value, instead of just returning that value. The loop will always finish and only return the last value (Excuse the vagueness. I need to review how the DOM works along with event handling and will probably have to come back to this section).

### Callback:
- I honestly don't know exactly what a callback is.
- It's something that aids with the asynchronous nature of javascript.
- I will come back to this section in the future as the example provided is not very clear.
- .... My problem is more with asynchoricity and how it generally works. 

### Modules:
- **Modules** are created using functions along with closures or objects. A module presents an interface but hides the data and implementation. Closures can be used along with functions and objects to create modules. Using function as modules can eliminates the problem of global variables.
- "The general pattern of a module is a function that defines private variables and function; creates privileged functions which, through closure, will	have access to the private variables and functions; and that returns the privileged functions or stores them in an accessible place".
- Again, as in the closure example, to make great use of closures, create a function which returns an object whose values are closures which have access to the function's variables. After the outer function is run, the object with the closures is returned. We would generally assign this function to a variable. This variable now holds the value of the returned object. All we have e access to now is that object. We can run the object's closures. The only way the variables of the outer function are accessed is through the object's closures. *This was such a mouthful.*

### Cascade:
- For functions meant to change state but return nothing, they can isntead return `this`. This will result in *cascades*, meaning that a chain methods can be called on the same object.

### Currying:
- The book proposes the method `curry` which can be attached to `Function.prototype`. `curry` enhances the functionality of a function, taking advantage of the fact that a function is also a value. I am not intellectually ready for **currying** at the moment.

### Memoization:
- This has to do with the so-called dynamic programming. Recursion can result in many many wasted caclulations. By storing the already processed results in say an array, many such wasted calculations can be avoided. There are better places to learn this stuff.

## Chapter 5: Inheritance
- Some of the points discussed in this chapter are rehashes (or elaborations) on the different function invocation patterns. Inheritence and function invocation patterns are interrelated. Some of those points discussed in that section will be repeated here.
- Js has much richer (or rather confusing) set of inheritence patterns. Prototypical inheritence, meaning that an object can iherit directly from another object, is the default pattern. Javascript does also have a pseudoclassical pattern which is can be confusing.

### Pseudo-classical inheritance:
- The pseudo-classical inheritance pattern is related to the [constructor invocation pattern](#3-the-Constructor-Invocation-Pattern).
- Every time a function object is created, it is a given a `prototype` property. The prorotype property's value is an object containing a `constructor` property. The value of this constructor is the function object itself.
- The `prototype` object is "the place where inherited traits are to be deposited."
- To create a class (or rather a pseudo-class), a constructor is defined as in: 
```java
var Animal = function(sound){
	this.sound = sound;
}
```
- The class prototype can be augmented (methods added to the class) as follows:

```java
Animal.prototype.getSound = function(){
	return this.sound;
}
```
- Creating an `Animal` object (instantiating the `Animal` class) is done as follows:
```java 
var cat = new Animal("meow");
console.log(cat.getSound()); // prints 'meow'
```
- To perform pseudo-classical inheritance, a new class is created and its prototype is replaced by an instance of the class to be inherited from as in:
```java
var Cat = function(name) {
	this.name = name;
};

Cat.prototype = new Animal();
Cat.prototype.purr = function(){
	console.log("purr!");
};
```
- The book proposes an `inherits` method that helps simplify the pseudo-classical inheritance pattern which I don't need. I have no use for such method.
- pseudo-classical inheritance has no privacy. "There is no access to `super` methods."
- If you forget the `new` keyword, `this` is bound to the global object resulting in possibly messing the whole program. This can happen without errors or warnings.
- This pattern was cooked up to accommodate programmers coming from the Java and C++ OOP world. There is no point of using it in Javascript considering how complicated and error-prone it is.

### Object Specifiers:
- Instead of making the constructor take a very long array of parameters and having to remember	the order in which the parameters need to be given, the constructor can be offered a single object containing the parameters which can then be listed in any order as in:
```java
var obj = maker({
	first: f,
	last: l,
	middle: m,
	state: s,
	city: c
});
```
instead of: 
```java
var obj = maker(f, l, m, c, s);
```

### Prototypal (Prototypical) Inheritance:
- This pattern is substantially simpler than the classical pattern. Create an object and then just use `Object.creat(<parent-obj>)` and then customize the new object if applicable:
```java
var animal = {
	name: "animalo",
	sound: "how how!",
	get_name: function(){
		return this.name;
	},
	get_sound: function(){
		return this.sound;
	}
};

var cat = Object.create(animal);
cat.name = "Cat";
cat.get_sound = function(){
	return this.sound;
}
cat.sound = "meow";
cat.get_sound();
```

### Functional Inheritance:
- Pseudo-classical and prototypal inheritance patterns don't preserve privacy. Functional inheritance pattern can achieve privacy.
- The explanation of how functional inheritance is a little tedious, although the example provided is almost self explanatory.
- This is my understanding of how functional inheritance works: the parent object is a function that contains a `that` object (say an object literal, for simplicity). The function also has inner functions that enjoy access to that object. The outer function returns `that`. For the child object, it simply assign a call to the parent function (object) to its `that` to inherit all its properties.
```javascript
var animal = function(spec){
	that = {};

	that.get_name = function(){
		return spec.name;
	};

	that.get_sound = function(){
		return spec.sound
	}
	return that;
};

var cat = function(spec){
	that = animal(spec);

	that.purr= function(){
		return "purr";
	};

	that.scratch = function(){
		return "ghghhghghg";
	}
	return that;
};
```
- "Superior methods?" I have no idea what that means.

### Parts:
- I don't understand what the author is trying to say here; might come back to it in the future. 

## Chapter 6: Arrays
- Js arrays are not real arrays (contiguous chunks of memory). Although js arrays are much slower than real arrays and not different from other arrays, they have a useful literal format and built-in methods.

### Array Literals:
- A js array literal is very similar to an object literal, except that an array literal inherits from `Array.prototype`, while an object literal inherits from `Object.prototype`. Array literals have more useful methods and properties such as the "mysterious `length` property". 
- A js array can hold data of different types such as numbers, strings and other arrays.

### Length:
- The length of an array is the largest integer property name (pseudo-subscript) in the array plus 1.
- The length of an array is not necessarily the number of elements stored in an array.
- The length can be set explicitly. Making it larger "does not allocate more space." Making it smaller causes values that are equal or larger than the new length to be deleted.
- An element can be appended to the array using the array length as a "supscript." This same operation can also be done with the `push` method.

### Delete:
- The delete operator empties a property. It creates a hole in the array leaving an `undefined` (or empty) value. It works as follow:
```javascript
var nums = [1, 2, 3];
delete nums[1];
// Now nums is [1, undefined, 3] or [1, empty, 3]
```
- To avoid this anomaly, you need to decrease the subscript of every element to the right of the deleted element. The `splice` method is useful method that handles this situation. It takes two arguments. The first argument is the element "position" in the array. The second argument is the number of elements to be deleted. 
```javascript
var nums = [1,2,3,4,5,6];
nums.splice(1,3);
// Results in [1, 5, 6]
```
- Splicing is an expensive operation.

### Enumeration:
- `for in` is bad and makes no guarantees about the order of properties in an array. To iterate over an array just use the classic `for (i = 0; i < array.length; i++)`
### Confusion:

### Methods:

### Dimensions:

## Chapter 7: Regular Expressions
- I don't think I have enough knowledge to understand this chapter. A *noncapturing group*?! What the hell is that?!
- I might come back to this chapter after acquiring some basic understanding general regex theory and syntax.

## Chapter 8: Methods

## Chapter 9: Style

## Chapter 10: Beautiful Parts
 

