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

// JS maintains a call stack that determines which execution context is being refferd to currently (there is global execution context and there can be multiple local execution contexts depending on scopes defined during compilation). Call stack has tracker to know which line of code is being currently executed during execution phase
// note that all variables are initialized during run time
// function execution context - whenever a function is called(during runtime/ execution phase) in javascript, a new execution context is created and that is called function execution context and it again has two parts memory creation phase(local) and the code execution phase
// when the local memory creation activates, first of all all the arguments of the function are stored in an array like object(that has index and length property) and then the parameters of function are assigned the value of arguments passed. After this all the local variables are created in local memory(rules/ method being same as GEC memomry creation for all local variables and functions if any) and then code execution starts

// lets analyse following snippet
let foo= "foo";                                            //1
console.log(foo);                                          //2
function getfullname(fname, lname){                        //3
    console.log(arguments);                                //4
    let myvar = "var in func";                             //5
    console.log(myvar);                                    //6
    const fullname = fname + " " +lname;                   //7
    return fullname;                                       //8
}                                                       
const personname = getfullname("Bhumika", "Chauhan");      //9
console.log(personname);                                   //10
// execution context 
// GEC is created and pushed in call stack
// global memory creation in GEC(execution has not started yet) - this is set to window, foo( created): uninitialized, getfullname is stored, personnname(created) :uinitialized
// code execution phase - line 1: foo = "foo"
//                        line 2: displays foo on console
//                      nothing to execute from line 3 to 8 rn
//                        line 9: function getfullname is called. A function call is encountered so function execution context is created and pushed into call stack on top of FEC
//                                line 3: local memory creation in FEC(execution not started yet)- arguments are stored in array like objects named arguments from call(note that entire code is already analysed): ["Bhumika", "Chauhan"], parameters are assigned value of arguments: fname ="Bhumika", lname = "Chauhan", myvar(created): uninitialized, fullname(created): uninitialized
//                                code execution phase - line 4: displays arguments 
//                                                       line 5: myvar ="var in func"
//                                                       line 6: displays var in func on console
//                                                       line 7: fullname = "Bhumika Chauhan"
//                                                       line 8: fullname returned
//                                FEC popped out of call stack, jumps to GEC code execution phase
//                                personname ="Bhumika Chauhan"
//                        line 10: displays Bhumika Chauhan on console
// GEC popped out of call stack

// lexical environment and scope chain
const lastname = "Dutt";
const printname = function(){
    const firstname ="Riya";
    console.log(firstname);
    console.log(lastname);              // note that here FEC is created during/inside the code execution phase of GEC, so the variables which are not present in FEC kocal memory are found by jumping to one level outside in its lexical environment till the variable is encountered or till GEC is reached
}
printname();

// closures - when function returns another function along with the lexical environment of the returned function. If this was not done then the local parameters would vanish when FEC for printFullIdentity will be popped and printIdentity will not be able to use those local parameter
function printFullIdentity(fn,ln){                            //1
    function printIdentity(){                                 //2
        console.log(fn, ln);                                  //3
    }
    return printIdentity ;                                    //4
}
const value = printFullIdentity("Abhijeet", "Roy");           //5
value();                                                      //6
// execution context 
// GEC is created and pushed in call stack
// global memory creation in GEC(execution has not started yet) - this is set to window, printFullIdentity is stored, value(created) :uinitialized
// code execution phase - nothing to execute from line 1 to 4 rn
//                        line 5: function printFullidentity is called. A function call is encountered so function execution context is created and pushed into call stack on top of FEC
//                                A function is encountered so function execution context is created and pushed into call stack on top of FEC
//                                local memory creation in FEC(execution not started yet)- arguments are stored in array like objects named arguments from call(note that entire code is already analysed): ["Abhijeet", "Roy"], parameters are assigned value of arguments: fn ="Abhijeet", ln = "Roy", printIdentity is stored in local memory(it has no parameters)
//                                code execution phase - nothing to execute from line 2 to 3 rn
//                                                       line 4: function printIdentity is returned along with the local parameters of printFullIdentity function because JS knows those are used by printIdentity(these are called closures- when function returns another function along with its own parameters)(if this was not done then the local parameters would vanish when FEC for printFullIdentity will be popped and printIdentity will not be able to use those local parameter), value = printIdentity function + fn + ln
//                                FEC popped out of call stack, jumps to GEC code execution phase ( along with this the local memory created for that function is also gone all the local variables, functions, everything in local)
//                        line 6: function prIntidentity is called through value. A function call is encountered so function execution context is created and pushed into call stack on top of FEC
//                                A function is encountered so function execution context is created and pushed into call stack on top of FEC
//                                local memory creation in FEC(execution not started yet)- arguments are not passed and there are no parameters so arguments
//                                 code execution phase - line 3: (fn , ln not found in srguments object or local memory but are found in golabl memory in value)
//                                                                displays Abhijeet Roy on console
//                                FEC popped out of call stack, jumps to GEC code execution phase
// GEC popped out of call stack

// application of closure - tracking if a function has already been called
function track(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("First call");
            counter++ ;
        }
        else{
            console.log(`Already been called`);
        }
    }
}
const calling = track();
calling();
calling();
calling();