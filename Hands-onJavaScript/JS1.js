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


var value = 3;
console.log(value);
console.log(value +4);
console.log(value *2**2); 
console.log(value%2);         //remainder

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
    // console.log(C);

// Null datatypes- This can be used when one has to create variable but is not sure of the value as of now
let myvar = null;
console.log(myvar, typeof myvar);    // there's a bug in JS that shows typeof null as object instead of null. Not fixed yet because several frameworks are alredy built dealing this problem and will lead to inconvinience
myvar = " cahnged from null to string";
console.log(myvar);

//Max safe integer - determines the limit of integers
console.log(Number.MAX_SAFE_integer);   // Earlier the limit of Number datatype used to be 9007199254748991 but now it shows undefined

// BigInt datatype(recent datatype)
let num1 = 12n;                          // comes with an increased max. limit
console.log(num1, typeof num1);
let num2 = BigInt(10);                  // using BigInt constructor
let num3 = 4;
console.log(num2, typeof num2);
console.log(num1 + num2);
    //console.log(num1 +num3);          // gives error as implicit type conversion does not occur when BigInt is used with other datattypes
console.log(num1 + BigInt(num3));

//Boolean datatypes
A = true;
console.log(typeof true);
console.log(typeof false);
console.log(A, typeof A);

//Comparison operators- returns boolean values
num1 = 40;
num2 = 35;
console.log(num1<num2);
console.log(num1<=num2);
console.log(num1>num2);
console.log(num1>=num2);
// == vs ===
num1 = "7";
num2 = 7;
console.log(num1==num2);        // returns true because == checks for value only and not datatype
console.log(num1===num2)        // checks for both matching value as well as matching datatype
// != vs !==
console.log(num1!=num2);        // returns false as num1 and num2 are same by value (again datatype is not checked)
console.log(num1!==num2);       // returns true as it checks for value as well as datatype and finds that num1 is not equal to num2

// if else condition
age = 17;
if(age>18)                      // condition that returns true or false
{console.log("Adult");}         // if block runs when if condition is true 
else
{console.log("Minor");}         // if else blocks end here
if(age=== 17)                   // new if else block
{console.log("17");}
else
{comsole.log("Not 17");}

// Truthy and falsy values
// Falsy values - "", null, undefined, 0: these are the values that if passed in condition block, return a false 
// apart from truthy values rest are falsy values
let var1;
if(var1)
{console.log("it is not a falsy value")}
else
{console.log("It is a falsy value")}

// ternary operator or conditional operator-   <>?<>:<>  in place of first <> condition is written, in place of second <> execution statements for a true value of condition, in place of third <> execution statements if consdition is false
age = 8;
let drink = age>=8?"coffee":"milk";             // here either coffee or milk will be stired in drink depending on the given condition
console.log(drink);

// and, or operators
if(true && false)                     // true if all condition are true else false
{console.log(true);}
else
{console.log(false);}
if(true || false)                      // false if all conditions  are false else true
{console.log(true);}
else
{console.log(false);}

// taking input from user using prompt() function
    //let userGuess = prompt("Guess a number: ");   // promt() allows to take user input along with promt or pop up with a text message on the webpage. 
    // console.log(userGuess);                       // console.log() displays on console and not the webpage itself
    // console.log(typeof userGuess);                //Also it stores the input in the form of string always
    // userGuess = +userGuess;                       // Either this can be done or + can be used directly in front of promt()
    // console.log(typeof userGuess);

// nested if-else
    // let winnerNumber = 12;
    // if(userGuess === winnerNumber)
    // {console.log("Right guess!");}
    // else
    // {
    //     if(userGuess > winnerNumber)                      // nested if-else
    //     {console.log("Guessed a bigger number");}
    //     else
    //     {console.log("Guessed a smaller number");}
    // }

// else if ladder
let temp = 24;
if(temp<0)                               // control jumps out of the else if ladder after executing body of a satisfied condition 
{console.log("Freezing cold");}
else if(temp<=16 && temp>0)
{console.log("cold");}
else if(temp<=25 && temp>16)
{console.log("pleasant");}
else if(temp<=30&& temp>25)
{console.log("warm");}
else
{console.log("Hot");}

//switch staement
let day = 2;
switch(day)                           // switch does not stop jumping to next case by itself even when the correct case is found, thus jump statement break is used
{
    case 0: console.log("Sunday");
            break;    
    case 1: console.log("Monday");
            break;   
    case 2: console.log("Tuesday");
            break;  
    case 3: console.log("Wednesday");
            break;    
    case 4: console.log("Thursday");
            break;     
    case 5: console.log("Friday");
            break;       
    case 6: console.log("Saturday");
            break; 
    default: console.log("Wrong number");
}