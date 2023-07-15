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









