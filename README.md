# What is JS?

- JS (JavaScript) is a lightweight language.
- It employs hybrid approaches in its execution.
- JavaScript is a loosely typed language.
- Using JavaScript in the front-end, and we can use Node.js for the back-end.

# Compiled vs. Interpreted Languages

### Compiled Languages

- Source code is transformed into machine code by a compiler.
- Result is a standalone executable file.
- Errors are detected during compilation.
- **Examples**: C, C++, Fortran.

### Interpreted Languages

- Source code is executed line-by-line by an interpreter at runtime.
- No prior compilation to machine code.
- Errors detected during actual execution.
- **Examples**: Python, Ruby, JavaScript (though many modern engines use JIT).

### Hybrid Approaches

- Some languages use a mix of both compiled and interpreted approaches.
- **Java**: Source code is compiled into bytecode, then interpreted or JIT-compiled by the JVM.
- **Modern JavaScript**: Initial interpretation followed by JIT compilation for optimization.

# JavaScript's Basic Data Types

## Primitive Types

1. **Number**

   - Used to represent both integers and decimals. Unlike some other languages, JavaScript doesn't differentiate between integer and floating-point data types.
   - **Example:**
     ```javascript
     let age = 25;
     let average = 5.67;
     ```

2. **String**

   - Represents textual data or sequences of characters. They can be wrapped in single quotes ('...'), double quotes ("..."), or backticks (\``...\`).
   - **Example:**
     ```javascript
     let greeting = "Hello";
     let name = "John";
     ```

3. **Boolean**

   - Represents a logical entity and can have two values: true or false. It's often used in conditions.
   - **Example:**
     ```javascript
     let isStudent = true;
     ```

4. **Undefined**

   - Represents a variable that has been declared but has not been assigned a value.
   - **Example:**
     ```javascript
     let fruit; // This is 'undefined' until we give it a value
     ```

5. **Null**
   - Represents the intentional absence of any value or object. It's like telling the computer, "This is empty on purpose."
   - **Example:**
     ```javascript
     let emptyValue = null;
     ```

### `null` vs `undefined` in JavaScript

1. Definition

- **undefined**: Declared variables without a value. It's the default initial value for variables.
- **null**: Represents a deliberate absence of value.

2. Type

- **undefined**: Its type is `'undefined'`.
- **null**: Its type is `'object'` (due to a historical JavaScript bug).

3. Comparisons

- **null**: Loosely equals (`==`) both `null` and `undefined`, but strictly equals (`===`) only `null`.

## Non-primitive (Reference) Types

1. **Object**

Used to store collections of data and more complex entities:

```javascript
let person = {
  name: "John",
  age: 30,
};
```

2. **Array**

A type of object used for storing sequences of values:

```javascript
let fruits = ["apple", "banana", "cherry"];
```

# Loops & Conditions in JavaScript

## Conditions

### `if` Statement

Checks a condition and executes a block of code if the condition is true.

**Syntax:**

```javascript
if (condition) {
  // code to execute if condition is true
}
```

### `if...else` statement

in JavaScript is used to execute one block of code if a specified condition is true, and another block of code if the condition is false.

**Syntax:**

```javascript
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
```

### `Ternary` Operator (Conditional Operator) in JavaScript

The ternary operator provides a shorthand way to perform conditional (ternary) operations. It's essentially a concise `if...else` expression.

**Syntax:**

```javascript
condition ? valueIfTrue : valueIfFalse;

const number = 5;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(result); // Outputs: "Odd"
```

## Loops

### `for` Loop

**Syntax:**

```javascript
for (initialization; condition; update) {
  // code to execute on each loop iteration
}
```

### `while` Loop in JavaScript

The `while` loop in JavaScript executes its statements as long as a specified condition evaluates to true. This loop is ideal when the number of iterations is unknown but depends on a condition being met.

**Syntax:**

```javascript
while (condition) {
  // code to execute while the condition is true
}
```

### `do...while` Loop in JavaScript

The `do...while` loop is a variant of the `while` loop in JavaScript. This loop will execute the code block once before checking if the condition is true, then it will repeat the loop as long as the condition is true.

**Syntax:**

```javascript
do {
  // code to execute
} while (condition);
```

### `for...of` Loop in JavaScript

The `for...of` loop is a modern addition to JavaScript, introduced with ES6 (ECMAScript 2015). This loop is designed to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It provides a cleaner and more readable syntax compared to traditional `for` loops, especially when working with iterables.

**Syntax:**

```javascript
for (const element of iterable) {
  // code to execute for each element
}

const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Outputs:
// apple
// banana
// cherry
```

# Functions in JavaScript

In JavaScript, a function is a block of code designed to perform a particular task. Functions are executed when they are invoked (called).

## 1. Function `Declaration`

```javascript
function functionName(parameters) {
  // code to be executed
}
```

## 2. Function `Expression`

You can also define functions using a function expression:

```javascript
const myFunction = function (parameters) {
  // code to be executed
};
```

## 3. `Arrow` Functions

Introduced in ES6, arrow functions allow for a more concise syntax:

```javascript
const myFunction = (parameters) => {
  // code to be executed
};
```

## Calling a Function

To invoke or call a function in JavaScript, use the following syntax:

```javascript
functionName(arguments);
```

# Scope in JavaScript

In JavaScript, **scope** refers to the current context of code, which determines the accessibility of variables to JavaScript. The two main types of scope in JavaScript are **global scope** and **local scope**.

## 1. Global Scope

A variable declared outside a function belongs to the global scope. This means it can be accessible and modifiable from any other scripts in the same document:

```javascript
let globalVariable = "I am global!";

function showGlobal() {
  console.log(globalVariable);
}

showGlobal(); // Outputs: "I am global!"
```

## 2. Local Scope (Function Scope)

Variables declared within a function are in the local scope. They have a different scope for every call of that function:

```javascript
function showLocal() {
  let localVar = "I am local!";
  console.log(localVar);
}

showLocal(); // Outputs: "I am local!"
console.log(localVar); // Error: localVar is not defined
```

## 3. Block Scope (with `let` and `const`)

With the introduction of `let` and `const` in ES6, JavaScript introduced block-level scope:

```javascript
if (true) {
  let blockScopedVar = "I am block-scoped";
  const blockScopedConst = "I am also block-scoped";
  console.log(blockScopedVar); // Outputs: "I am block-scoped"
  console.log(blockScopedConst); // Outputs: "I am also block-scoped"
}

console.log(blockScopedVar); // Error: blockScopedVar is not defined
console.log(blockScopedConst); // Error: blockScopedConst is not defined
```

# Objects in JavaScript

In JavaScript, an **object** is a collection of key-value pairs where the keys (often referred to as properties or attributes) can be strings, numbers, and the values can be any valid JavaScript value including other objects, creating a possibility for nested objects.

Objects are used to store data in a structured way and can represent real-world entities with multiple characteristics.

## Creating Objects

This is the most common way to create an object.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
```

## Accessing Object Properties

You can access the properties of an object using dot notation or bracket notation:

```javascript
console.log(person.firstName); //dot notation
console.log(person["lastName"]); //  bracket notation
```

## Modifying Objects

Objects in JavaScript are mutable. This means you can modify their properties or add new properties to them after they are created:

```javascript
person.age = 31; // Modifies the age property
person.email = "john.doe@example.com"; // Adds a new email property
```

# Arrays in JavaScript

In JavaScript, an **array** is a data structure that can hold more than one value at a time. It is a list-like object where each item is a unique index, starting from `0`.

## Creating Arrays

There are different ways to create arrays:

**Array Literal Syntax:**

This is the most common way to create an array.

```javascript
let fruits = ["apple", "banana", "cherry"];
```

**`new` Keyword:**

Using the Array constructor:

```javascript
let fruits = new Array("apple", "banana", "cherry");
```

## Accessing Array Elements

Array elements are accessed using their index number:

```javascript
console.log(fruits[0]); // Outputs: "apple"
```

## Modifying Arrays

You can modify an existing item, and add new items:

```javascript
fruits[1] = "blueberry";
fruits[3] = "date";
```

## Iterating Over Arrays

You can iterate over arrays using loops Or using array methods like forEach:

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

### What is the difference between `for` and `forEach` in JavaScript?

Both `for` and `forEach` are used to iterate over elements, but they come with distinct characteristics and use cases.

**`for` loop**:

- **Traditional Loop**: A fundamental construct in many programming languages, not limited to JavaScript.
- **Flexibility**: Can iterate over any iterable object, including arrays, strings, etc.
- **Control**: Provides more control with the use of loop counter, exit conditions, and modification of the loop counter.

**`forEach` method**:

- **Array-specific**: A method exclusive to JavaScript arrays.
- **Callback Function**: Requires a callback function, which gets executed for each array element.
- **Less Control**: No direct way to break out of the loop or skip iterations like with a traditional `for` loop.

## Some Common JavaScript Array Methods

Arrays in JavaScript offer numerous built-in methods to perform various operations.

### `.push()` and `.pop()`

- **`.push()`**: Adds one or more elements to the end of an array and returns the new length.
- **`.pop()`**: method removes the last element from an array and returns that element.

  ```javascript
  let fruits = ["apple", "banana"];
  fruits.push("cherry"); // fruits becomes ["apple", "banana", "cherry"]
  fruits.pop(); // returns "cherry", fruits becomes ["apple", "banana"]
  ```

### `.shift()` and `.unshift()`

- **`.shift()`**: Removes the first element from an array and returns that element.
- **`.unshift()`**:.Adds one or more elements to the beginning of an array and returns the new length.

  ```javascript
  fruits.shift(); // returns "apple", fruits becomes ["banana"]
  fruits.unshift("strawberry"); // fruits becomes ["strawberry", "banana"]
  ```

### `.map()`, `.filter()`, and `.reduce()`

- **`.map()`**: Creates a new array by calling a provided function on every element in the calling array.
- **`.reduce()`**: Executes a reducer function on each element of the array, resulting in a single output value.
- **`.filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.

  ```javascript
  let numbers = [1, 2, 3];
  let doubled = numbers.map((x) => x * 2); // doubled becomes [2, 4, 6]
  let sum = numbers.reduce((acc, curr) => acc + curr, 0); // sum becomes 6
  let evenNumbers = numbers.filter((x) => x % 2 === 0); // evenNumbers becomes [2]
  ```

# Higher Order Functions in JavaScript

In JavaScript, A Higher Order Function is a function that either takes one or more functions as arguments or returns a function as its result.

## Examples:

### Array Methods

Many array methods in JavaScript are higher order functions because they take functions as arguments:

#### `.map()`

Transforms each element in an array by applying a function to it.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]
```

# JavaScript Variable Declarations: `var` vs `const` vs `let`

### `var`

- **Scope**: Function-scoped or globally-scoped.
- **Re-declaration**: Can be re-declared in the same scope.
- **Assignment**: Can be updated.
- **Hoisting**: Variables are hoisted with initialization as `undefined`.

```javascript
var name = "John";
```

### `let`

- **Scope**: Block-scoped (e.g., within curly braces `{ }`).
- **Re-declaration**: Cannot be re-declared in the same scope.
- **Assignment**: Can be updated.
- **Hoisting**: Variables are hoisted but without initialization.

  ```javascript
  let age = 25;
  ```

## `const`

- **Scope**: Block-scoped (e.g., within curly braces `{ }`).
- **Re-declaration**: Cannot be re-declared in the same scope.
- **Assignment**: Cannot be updated once assigned. Attempting to do so will result in a runtime error.
- **Initialization**: Must be initialized at declaration.
- **Note**: Not truly immutable. While the variable itself can't be reassigned, if it holds an object, the properties of that object can still be modified.

## Primitives with `const`

```javascript
const PI = 3.14159;
// PI = 3.15;  //  this line will throw an error. You can't reassign a const variable.

const person = {
  name: "John",
};

person.name = "Doe"; // This modification is allowed! You can modify properties of the object.

// person = { name: "Jane" };  // this line will throw an error because you can't reassign a `const` variable.

const numbers = [1, 2, 3];

numbers.push(4); // You can modify the contents of the array.
// numbers = [5, 6]; //  this line will throw an error. You can't reassign the entire array.
```

# DOM Manipulation with JavaScript

JavaScript provides a robust interface for interacting with and manipulating the Document Object Model (DOM) of a web page.

## **1. Selecting Elements**

Before you can modify an element, you need to select it:

- **By ID**:

  ```javascript
  const element = document.getElementById("myId");
  ```

- **By Class Name:**:

  ```javascript
  const elements = document.getElementsByClassName("myClass");
  ```

- **By Tag Name:**:

  ```javascript
  const elements = document.getElementsByTagName("div");
  ```

- **By Query Selector (returns the first match)**:

  ```javascript
  const element = document.querySelector(".myClass");
  ```

- **Query Selector All (returns a NodeList)**:

  ```javascript
  const elements = document.querySelectorAll(".myClass");
  ```

## 2. Modifying Elements

Once you've selected an element, you can manipulate it in several ways:

### Change Content:

Using `textContent` and `innerHTML` properties, you can modify the content of an element:

```javascript
element.textContent = "New Text"; // for text content
element.innerHTML = "<span>New HTML content</span>"; // for HTML content
```

### Change Attributes:

Attributes like href, src, id, etc. can be modified using `setAttribute` and their values can be fetched using `getAttribute`:

```javascript
element.setAttribute("href", "https://www.example.com");
const attributeValue = element.getAttribute("href");
```

### Change Styles:

You can manipulate the inline styles of an element using the `style` property:

```javascript
element.style.color = "red";
```

## 3. Adding and Removing Elements

### Creating Elements:

You can create new DOM elements using `createElement`:

```javascript
const newElement = document.createElement("div");
newElement.textContent = "Hello, World!";
```

### Appending Elements:

Once created, elements can be appended (added) to existing DOM elements:

```javascript
const parentElement = document.getElementById("parent");
parentElement.appendChild(newElement);
```

### Removing Elements:

If you need to remove an element from the DOM:

```javascript
const elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);
```

## 4. Event Handling

In JavaScript, you can interact with user actions such as clicks, keypresses, mouse movements, and many others using event listeners.

For example, to react to a click event:

```javascript
element.addEventListener("click", function () {
  alert("Element was clicked!");
});
```

# Destructuring in JavaScript

Destructuring provides a way to extract multiple pieces of data from arrays and objects and assign them to individual variables.

## Array Destructuring

With array destructuring, you can extract items from arrays and assign them to variables.

```javascript
const colors = ["red", "green", "blue"];

const [firstColor, secondColor] = colors;

console.log(firstColor); // Outputs: 'red'
console.log(secondColor); // Outputs: 'green'

const [, , thirdColor] = colors;

console.log(thirdColor); // Outputs: 'blue'
```

## Object Destructuring

With object destructuring, you can extract properties from objects and assign them to variables.

```javascript
const user = {
  firstName: "John",
  lastName: "Doe",
};

const { firstName, lastName } = user;

console.log(firstName); // Outputs: 'John'
console.log(lastName); // Outputs: 'Doe'

// to rename the variables as you destructure them,

const { firstName: fName, lastName: lName } = user;
console.log(fName); // Outputs: 'John'
console.log(lName); // Outputs: 'Doe'
```
