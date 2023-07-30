// How javascript works
// javascript is a synchronous language - execution of next line won't start unless the excecution of the line before is not completed
// javascript is a single threaded programming language - a single threasd is responsible for the execution of code that works synchronously
// javascript is compiled - code is compiled before execution
// compilation process involves three steps: 1) Tokenizing/lexing- breaking the entire code into tokens, 2) Parsing- generates Abstract Syntax Tree(AST), 3) Code generation-uses AST for generating executable code
// accorrding to official ECMAScript documentation, it is not compulsory to compile but the scripting language should offer 1) Early error checking (for syntax)- errors are shown before any of lines execute because code was parsed 2) Determining appropriate scope for variables: and this does not create variables but kepps a list of scope of varibales , and for these two to be accomplished parsing has to be done,so scripting languages prefer compilation to get this done 
// execution phase - In JS code executes inside execeution context. The first context created is the global execution context.
// creation of global execution context is done in two parts - 
// 1)creation phase(creation of global execution context): the variables in global scope(global memory) are created(instantiated) and given value undefined in case of a var declaration , value of this is set(which is different depending on where the execution environment like browser(which provides window as value) or node.js environment). The value of this depends on scope
console.log(this);
console.log(window);
// 2)code execution phase




