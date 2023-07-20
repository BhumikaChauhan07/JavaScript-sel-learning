// While loop- loop variable is declared outsideupdation of loop variable is done inside body. Body is not executed even once when lopp condition is not staisfied. entry control loop
let i = 1;
while(i<=5)
{   
    console.log(i);
    i++;
}

//for loop - loop varibale is declared and updated along with the condition statement. Body is not executed even once when loop condition is not staisfied. entry control loop
for(let j =0; j<=5;j++)
{
    console.log(j); 
}
    //console.log(j);            // Not accessible outside loop,j is a loop variable so its scope is within for block when declared with let loop variable scope remains the 
    
// scope of variables using var declaration
for(var k =-5; k<=0;k++)
{
    console.log(k); 
}
console.log(k);            // accessible outside loop,k is a loop variable with default scope within for block, when declared with var loop variable scope gets exetended outside the for block
     
// break keyword is used to purposely stop execution of looping constructs or switch blocks even when loop variable satisfies loop condition
for( k =0; k<=5;k++)
{
    if(k==3)
        break;
    console.log(k); 
}

// continue keyword skips the execution of rest of block for that value and updates the value of loop variable
for( k =0; k<=5;k++)
{
    if(k==3)
        continue;
    console.log(k); 
}

//do while loop - works same as while but body is executed once when loopcondition is not staisfied as condition is checked at exit. exit control loop
k = 55;
do
{   console.log(k); 
}while(k!==55)

// Arrays - ordered(indexed) collection of data stored contiguously. Arrays in javascript can store elements of any datatype within a single array, the elements need not to be of same datatypes
let arr = [1,2,3,4, "blue", null];
console.log(arr);
console.log(arr[0], arr[4]);
arr[3] = 6.7;                       // arrays are mutable
console.log(arr);
console.log(typeof arr);           // arrays are reference types. All reference types are objects thus arrays are objects
// since all reference types are object in order to know that a particular object is an array, Array.isArray() can be used
console.log(Array.isArray(arr));
// reference types are mutable which means the changes are made in original object
// array push() - adds an element at the end of array. Note that it does not create a new array but adds in the original array. This is because it is a reference type (primitive types are immutable)
arr.push(3);
console.log(arr);
// array pop() - removes last element from original array and returns it
 a = arr.pop();             // it returns the popped element which can be strored into a variable
 console.log(a, arr);
// array unshift() - adds element in start of array
arr.unshift("yellow");
console.log(arr);
// array shift() - removes and returns element from the start of array
a = arr.shift();
console.log(a, arr);
// push and pop are faster than shift, unshift because theuy remove element from the last. Shift, unshift will have to change indexing for the entire array 

// primitive vs reference type
// primitive datatypes are stored in stack( as they don't take much space and can be stored easily in a stack) along with values, each variable of primitive type are given a separate section in stack whether they had their values copied from other variables or not
num1 = 12;
num2 = num1;
console.log(num1, num2);
console.log(num1===num2);
console.log("After changinh num1");
num1 = 45;
console.log(num1, num2);                 // num1 is changed not num2  as both  variable  have separate memory to store values. Changing value of 1 would not affect the other one even though num2 was made to store the value that num1 stores


// reference types(or more accurately their values) are stored in heap and the pointers(reference variable names) to those memory in heap are stored in a stack 
let arr1 = ['item1', 'item2', 'item3'];
let arr2 = arr1;                         // arr2 is assigned the same address as arr1 which means arr1 and arr2 although are stored as separate pointers ion stack but they point to the same memory in the heap. There is only one array in heap that is being pointed by both arr1 and arr2
console.log(arr1, arr2);
arr1.push(44);
console.log("After pushing in arr1");
console.log(arr1, arr2);                 // changes are shown in both 
console.log(arr1===arr2);

// cloning arrays - making a clone/copy of array which does not get affected when changes are made in array
let arr3 = ['item1', 'item2', 'item3'];
let arr4 = ['item1', 'item2', 'item3'];    // one way is to create values(that are same) separately for each array  but this works good for small arrays only 
console.log(arr3===arr4);                 // for reference variables adresses are compared while using ===
console.log(arr3, arr4);
arr3.pop();
console.log(arr3, arr4);
//using slice() method for cloning (effective for large arrays)
let arr5 = arr3.slice(0);       // This method creates a new array starting from the mentioned index to the last index of the array on which this function was applied. Since a new array is created, different space is reserved in heap for this new array
console.log(arr3===arr5);
console.log(arr3, arr5);
arr3.pop();
console.log(arr3, arr5);
// concatenating an empty array with existing array using concat()
let arr6 = [].concat(arr3);     // concat() creates a new array by adding the elements of the last array to the first
console.log(arr3===arr6);
// using spread operator
let arr7 = [...arr3];          // ... denote spread operator it spreads the elemnts of arr3 in arr7
console.log(arr3===arr7);
// among all these using slice() gives is fastest

// creating an array out of already existing array and adding some extra elements to it
let arr8 = arr3.slice(0).concat("new item");
console.log(arr8);
let arr9 = [...arr3].concat("next new item");
console.log(arr9);

// array concatenation
let arr10 = arr4.concat(arr8);     //using concat() method
console.log(arr10);
let arr11 = [...arr5, ...arr1];    //using spread function
console.log(arr11);

//for loop  array to access elements of array
let fruits = ["apple","mango","banana","grapes"]
for(let i = 0;i< fruits.length; i++)
{console.log(fruits[i]);}

// using const for creating arrays - it is a better approach (not only for array but all reference types) as it saves from the errors assigning a new array to the reference name
const numbers = [1,2,3,4];
numbers.push(5);             // the new element gets pushed because the reference name used (numbers) actually stores the address of array which is not changed. the array is stored in heap and a value is pushed to array stored at the same adress
console.log(numbers);  
    //numbers = [1,2,3,4];   // this shows error as numbers is made to point to a new array hence the reference name is made to store a different address

// while loop in array
i = 0;
while(i<numbers.length)
{
    console.log(numbers[i]);
    i++;
}

// for of loop - it takes the elements of array one by one into an iterator variable
for(let num of numbers)
{console.log(num);}

// for in loop - it stores the index of array elemets in variable one by one (variable hols  the index of current elemnted being iterated)
console.log(fruits);
for(let fruit in fruits)
    console.log(fruit);
// getting elements through for in loop
for(let fruit in fruits)
    console.log(fruits[fruit]);

// array destructuring - used for storing individual elements of array into separete variables
let [var1, var2, var3, var4, var5] = numbers;
console.log(var1, var2, var3,var4,var5);
// if array has more elements than the variables mentiooned then the variables will start storing from index 0 till the no. of variables created rest of the elements wont be saved in any variable
// if array has less elements than no. of variables that we want to create, then remaining variables will be filled with undefined type
[var1, var2, var3, var4, var5] = fruits
console.log(var1, var2, var3,var4,var5);
//if we don't want to save elements into variable in order and want to store the third element in 2nd variable then we can use ,
[var1, ,var2, , var3] = fruits
console.log(var1, var2, var3);
// using array destructuring to store an array of elements 
[var1,var2, ...var3] = fruits     // stores the remaining elements in var3
console.log(var1, var2, var3);