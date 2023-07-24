// functions
function sayHI(){
    console.log("hi");
    return 6;
}
sayHI();                     // call/invoke for a function
let returnedVal = sayHI();
console.log(returnedVal);

function add(num1, num2){      // arguments in function used to make reusable functions which can operate for multiple values set as the arguments
    return num1+num2;
}
console.log(add(13,67));

function compare(num1, num2){
    if(num1>num2){return "num1>num2";}
    else{return "num1<=num2";}
}
console.log(compare(-1, 3));

// function expression
const isEven = function(num1){           // the function is an anonymous function without any name which is stored inside a variable so varible name will be trated as the function name
    return  num1%2 === 0;
}
console.log(isEven);       // note that isEven in this  statement prints the entire declaration 
console.log(isEven());     // this invokes the function

// arrow functions
const sayHi =()=>{
    console.log("Hi user!");
}
sayHi();
const isOdd = (num1)=>{                   
    return  num1%2 === 1;
}
console.log(isOdd(23));
// when we have single parameter, the round brackets can be removed otherwise its is compulsory for multiple parameters
// when we have a single expression in the function body then we can remove the curly braces too
//  If that single statement returns something then return keyword can also be ignored it will still work perfectly fine
const numToStr = num => typeof(String(num));
console.log(numToStr(4));

// hoisting                    // working will be explained later
// when we declare a variable using var, if it is acessed(printed say) before declaring the variable the it shows undefined while the same will give error in case of let and const this behavior is called hoisting
console.log(hello);
var hello = "hello";
console.log(hello);
// A function works normal when it is used(called) before creating function using function declaration to declare function but gives error while creating it using function expression or arrow function
console.log(firstLetter("Bhumika"));
function firstLetter(string1){
    return string1[0]
}
    //status();                                          // gives error even while creating variable with var
    //var status = function(){console.log("Success");}


// function inside function
const app = function(){
    console.log("Inside app");
    const appFeature = ()=>{console.log("Accessing app feature");} 
    appFeature();                 // can be called within the parent function only  
}
app();

// lexical scope
value = 100
function outerFunc(){
    const innerFunc1 = () =>
    {
        console.log ("inside innerFunc1",value);   // when same name variable exists in the function and its outer function(lexical environment) then it prioritises its local variable. If that variable is not present then it uses the variable(if present) of lexical environment and if its still not present then it will check the lexical environment of the outer function and if found, then uses that variable
    }
    console.log ("inside outerFunc",value);
    innerFunc1();
}
outerFunc();

// block scope vs function scope
//we can create blocks using {} and any statement can be written in a block. A block can be an independent block, it does not have to compulsorily be an if or for or a function block
// let and const are block scope, can be accessed within the block only not outside
{
    let first = "first";
    const second ="second";
    var  third = "third";           // var is a function scope
}
    //console.log(first);       // shows error while accessing out of block
    //console.log(first);
console.log(third);                // since var is a function scope (and the js file can be seen as the main function), var can be used any where. Declare anywhere use anywhere

{
    var fName = "Bhumika";
    console.log(fName);
}
{
    var fName = "Spraha";
    console.log(fName);
}
{
    console.log(fName);             // this uses the latest declaration 
}
// lexical environment is the just outside environment and lexical scope does not use variable (which is not present in the function/block)of inside environment (like a function or bloxk inside the current function /block) but if the variable is in inside environment id declared using var it is used because it follows the policy of declare anywhere and use anywhere in function scope

// default parameters - used when parameters are not provided by the user
function addNum(a=1,b=2){
    return a+b;
}
console.log(addNum(3));
console.log(addNum());

// rest parameters - to take in extra/remaining parameters in call into  a single parameter
function newFunc1(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
newFunc1(1,2,3,4,5,6,7,8);      // now here it does not give the error that the number of parameters in call does not match with the no. of parameters in declaration. It prints the first 3 parameters
function newFunc2(a,b,...c){    // using spread operator for taking remaining/rest parameters
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(Array.isArray(c));
}
newFunc2(1,2,3,4,5,6,7,8); 

// parameter destructuring (used with objects taken as parameters)
const person ={
    fName: "Bhumika",
    gender: "f"
};
function print({fName, gender})           // array destruicturing done in the parameter list itself
{
    console.log(fName);
    console.log(gender);
}
print(person);

// callback function - function as a parameter which is generally named callback (not compulsory though)
function func1(val){
    console.log(`Inside func1 value ${val}`);
}
function func2(callback){
    callback();
    callback(34);
}
func2(func1);

// functions returning function
function func3(){
    function func4(){
        console.log("Hello");
    }
    return func4;
}
console.log(func3());
const func = func3();
func()
// function using call back functions, returning functions or taking functions as parameters are called higher order functions