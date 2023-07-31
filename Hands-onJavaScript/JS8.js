// How javascript works
// javascript is a synchronous language - execution of next line won't start unless the excecution of the line before is not completed
// javascript is a single threaded programming language - a single threasd is responsible for the execution of code that works synchronously
// javascript is compiled - code is compiled before execution
// javascript is a lexical scope language - the scope of variables or lexicals is decided on the basis if how the code is written 
// compilation process involves three steps: 1) Tokenizing/lexing- breaking the entire code into tokens, 2) Parsing- generates Abstract Syntax Tree(AST), 3) Code generation-uses AST for generating executable code
// accorrding to official ECMAScript documentation, it is not compulsory to compile but the scripting language should offer 1) Early error checking (for syntax)- errors are shown before any of lines execute because code was parsed 2) Determining appropriate scope for variables: and this does not create variables but kepps a list of scope of varibales , and for these two to be accomplished parsing has to be done,so scripting languages prefer compilation to get this done 
// execution phase - In JS code executes inside execeution context. The first context created is the global execution context.
// creation of global execution context is done in two parts - 
// 1)creation phase(creation of global execution context- hoisting): the variables in global scope(global memory) are created(instantiated)[Note that these variables and their scope are already known during parsing so it knows that a particular variable exists in code if it is declared], functions in global scope are added to global memory and given value undefined in case of a var declaration, variables remain uninitialized in case of let and const declaration , value of this is set(which is different depending on where the execution environment like browser(which provides window as value) or node.js environment). The value of this depends on scope
console.log(window);
console.log(this);                   // as global execution context is created value window is assigned to this by browser
console.log(firstname);              // this line alone gives error if firstname is not declare later in the code as its declaration should exist so that it is instantiated. But if it exists then as stated in comment above after defining scope during parsing, it is instantiated in global execution context and given undefined value till the time it is not provided any value
var firstname = "Bhumika";           // declaration through var and value is provided
console.log(firstname);              // now it prints the assigned value of variable
// 2)code execution phase - this excutes the code which is in executable format ans shows the output

//during compilation, the errprs are addressed and scopes are defined: global scope contains - myFunction function, firstname, lastname and fullname variables
// now GEC is created (GEC is added to stack)
// the variables are stored in object as key value pair by javascript and this is called environment record
// then execution starts
console.log(fname);
console.log(myFunction1);
myFunction1();
function myFunction1(){
    console.log("iside my function1");
}
var fname = "Bhumika";
var lname ="Chauhan";
var fullname = fname + " " +lname;
console.log (fullname);
// Once all the lines are executed GEC is popped out of stack
// Hoisting explained - variables (in case of var only) and functions (defined using function keyword) can be accessed before declaration because they are already stored in global memory during global context creation brfore execution
console.log(myFunction2);
var myFunction2 = function(){console.log("iside my function2")};   // here when GEC is created there is only variable myFunction2(var declaration) in global memory, the function is declared as a value of this variable not as the classical function through function declaration, thus when accessed before the variable value is assigned it gives value undefined 
// however it knows that a function exists which is later stored into this variable because of scope definition of entire code during compilation. so during time of creation of execution context JS knows which variable is needed to be created in which context (global context or local context) as per the scopes defined for variables     

// case of let declarations
    //console.log(variable1);     // gives error if used before declaration as uinitialized variables cannot be accessed, they need to be initialized by some value (may it be undefined)     
let variable1 = 2;      // although let and const are also hoisted (variable existance is known before execution) but the output depends on values in global memopry and those assigned at runtime

// Uncaught ReferenceError: cannot access variable before initialization - this error refers to the fact that variable exists in global memory but its value is not initialuzed yet
// Uncaught ReferenceError: variable is not defined - this error means variable used is not even declared and is not present in global memory

// Temporal dead zone(TDZ) -  time period till which a variable remains uniniitialized, it remains in temporal dead zone 
// NOTE : if some variable does not exist typeof gives value undefined as we are trying to check the type of something that does not exist

