// JavaScript is case-sensitive
"use strict";
// comment shortcut: ctrl+/ to remove text from being a comment press the same again
console.log("HELLO WORLD");     // used to print something on console

// variables: names given to memory space that stores data or values
// keyword used to create a variable : var
var Name = "Bhumika";    // variable declaration + providing value
console.log(Name);
//Assigning a new value 
Name ="Chauhan"      // if here var keyword was used, then it would not create any problem but the same variable will be declared twice
console.log(Name);


var value = 1
console.log(value);
console.log(value +4);
console.log(value *2**2); 


// variables can be created without using var keyword as well
    //Firstname = "khushi";         //This will produce an error after using strict mode
    //console.log(Firstname);
// But in order to reduce that flexibility we can use the strict mode at top of js file, which will give error everytime stict syntax is not followed
// Strict mode also help avoid mistakes of creating a new variable if we by chance mistype the variable name

// Rules for naming variables
// 1. cannot start with a number
// 2. Only _ and $ special symbols can be used (anywhere) in the name
// 3. Spaces cannot be used by convention camelcase is used (in order to separate we can use underscore - First_name, this is called snakecase writing or make the first letter of new word capital - FirstName, this is called camelcase writing)
// 4. by convention they should start with small letter (although capital letters won't give erroe)
// 5. It can contain numbers letters and $,_

// using let keyword to declare variables
    //let sibname = "DAKSH"    // declaring twice gives an error
    //console.log(sibname);
let sibname = "kittu"
console.log(sibname);
var breed = "doberman" // np erroe in case of using var for declaring variable
console.log(breed);
var breed = "shitzu"
console.log(breed);
// though double declaration is not allowed while using let but the value of variable can of-course be chamged

//declaring constants
const pi =  3.14;
console.log(pi);
    //pi = 1;       // gives error as constants stored a fixed value that cannot be chamged after being set
console.log(pi *2);
console.log(pi-2);

//string indexing (incides start from 0)
console.log(sibname[3])
console.log(sibname.length)       // gives length or size of a string, spaces are considered as character if they are part of the string
console.log(sibname.length - 2)   // returns secondlast index 

//Remember that strings are immutable so everytime you apply a function to it or change it a new string is created
// cutting out leading and trailing spaces in a string using trim() function
let fruit = "    Apple    "
console.log(fruit.length + fruit); 
fruit = fruit.trim();                // here fruit.trim() creates a new string and the fruit varaibale is now assigned the value of new string. Another string variable could aslo be made to strore this new string
console.log(fruit.length + fruit);
//changing all characters to uppercase using toUpperCase() function
console.log(fruit.toUpperCase());    // this again creates a new new string which can either we stored in aseparate string variable or made as new value for the existing variable
//changing all characters to lowercase using toLowerCase() function
console.log(fruit.toLowerCase());
//slicing in strings
console.log(fruit.slice(1,4));      // the index before ',' is included while the index after ',' is not included. String will be sliced from index 2 to 3
console.log(fruit.slice(2,-1));     // starts from index 2 and stops at second last (-1 indicates last)
console.log(fruit.slice(0));        // starts from index 0 till the last index

//primitive datatypes in JavaScript: strings, numbers(2,3,4.5), booleans, undefined, null, BigInt, Symbol
//Checking type of a variable 
let age = 20;
console.log(typeof(age));
console.log(typeof fruit);           // It id not necessary to use () for typeof

//converting number to string
console.log(typeof(age));
console.log(typeof(age+""));        // concatenating a number with a string leads to conversion of no. to a string and then concatenating
console.log(typeof String(age));    // using String() function
//converting a string(holding numeric characters) to a number
console.log(typeof "34");
console.log(typeof +"34");         // adding a + in front of string makes it a number
console.log(typeof Number("34"))   // using Number() function

// String concatenation
console.log("Bhumika " + "Chauhan");    // concatenating strings directly
let string1 = "Bhumika ";
let string2 = "Chauhan";
console.log(string1 + string2);        // concatenating using string variables
let string3 ="17";
let string4 ="10";
console.log(string3+string4);         
console.log(+string3 + +string4);

// template strings - these are used to create a template of a frequently used string within which different values can be filled
let myName = "Bhumika Chauhan";
let myAge = 20;
let templateString = `My name is ${myName} and my age is ${myAge}`;   // `` are used to denote that its is a template string and ${} is used to fill different values
console.log(templateString);  

// undefined datatype - when we declare a variable but do not assign value to it, there is no specific type od=f data that it stores so it's given the undefined type
let A;
var B;
console.log(typeof A);
console.log(typeof B);
    // const C;                  // This does not work with const as it is mandatory to assihn a value to the constamt









