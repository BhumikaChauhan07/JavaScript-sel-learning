// important array methods

// forEach method - it takes a callback function and then on its own pass the elements and its index  in the array one by one in the callback function
const numbers = [1,2,3,4,5]
function printFunc(element, index){                             // parameters are always taken in the order : elements then index (and only these two are taken) by forEach method() and thus callback function should have the parameters accordingly
    console.log(`Index: ${index}, Element: ${element}`);
}
numbers.forEach(printFunc);       // foreach() takes callback function as parameter and then calls the callback function again and again by passing the elements and their index one by one
// the callback function can be declared or defined directly within forEach() as well   
numbers.forEach(function(element){console.log(`${element} X 2 = ${element*2}`);});   

// map method
 function Func(element, index){
    return element*element;
}
let abc = numbers.forEach(Func);
console.log(abc);                // here we can see that forEach() does not help store those retirned values even thhugh they are returned, it just runs the function thats it. 
abc = numbers.map(Func);         // This storing work is done by map(). It does the same thing as foEach() along with the extra feature of capabilty to store returned values. map() creates a new array for returned values
console.log(abc); 
numbers.map(printFunc);          // if a function does not return anything, it still shows the result
abc = numbers.map(printFunc); 
console.log(abc);                // but everytime it iterates for each element, it will not get a returned value so it will store undefined in the new array that it creates

// filter method - it is used to filter elements. It takes callback functions that return boolean value as parameter and calls it for each element of the array. It stores the elements in a new array for which the returned boolean value is true.
abc = numbers.filter(function(element){
    return element%2===0;
});
console.log(abc); 

// reduce method - It also takes a callback function amd the parameters are conevntionally taken as accumulator and currentValue. 
const sum = numbers.reduce((accumulator, currentValue)=>{           //Initially the value of the accumulator = first element(if a default value is not mentioned such as zero is mentioned here) , currentValue = second element and then on each iterartion the accumulator is made to store the returned value from previous call and currentValue stores the next element
    return accumulator+currentValue;  
}, 0)                                                            // default value                             
console.log(sum);
const userCart = [
    {pid : 1,pprice: 2000},
    {pid : 2,pprice: 4000},
    {pid : 3,pprice: 500},
    {pid : 4,pprice: 300}
]
const totalPrice = userCart.reduce((total, currentProduct)=>{
    return total+currentProduct.pprice; 
}, 0)
console.log(totalPrice);

// sort method - used for sorting. It sorts the elements and stores the changes in the same array (mutates the original array)
const Integers = [200, 60,45,700,156, 39];          // javascript reads the array elements as strings( first changes to string and then uses) - ["200","60","45","700","156","39"]
Integers.sort();
console.log(Integers);                  // the result is weird beacause javascripts does not take the elemnts as numbers but as strings thus it sorts according to ASCII code
// to get the expected sort we can pass a callback function with two parameters. The first and second parameters(a,b) are the first element and second elements initially.
// then it returns a-b if it is +ve means a>b so it places b before a and if it is -ve then b>a so a is kept first
//ascending sort
Integers.sort((a,b)=> a-b);
console.log(Integers);
//descending sort
Integers.sort((a,b)=> b-a);
console.log(Integers);
userCart.sort((a,b)=>a.pprice - b.pprice)
console.log(userCart)                        // this changes the actual order if we dont want the order to change we can clone array then apply sort to that cloned array 

// find method - used to find an element that matches a given condition. The condition written inside callback function(which takes individual elemnt as parameter) which returns the first element for which the value is true
const animals = ["Bear","dog","cat","lion"]
let ans = animals.find((str)=> str.length===3);
console.log(ans);

// every method- checks for a condition whether it is satisfied by all elements or not. It taken  acallback function which takes indiviadual element as para,eter and returns a boolean value depneding if the element satisfies condition or not. 
// every method returns true if the callback function returns true for all the elements else false
ans = animals.every((str)=> str.length===3);
console.log(ans);
ans = userCart.every((product)=>product.pprice>=100)
console.log(ans);

// some method - Its working is same as every method but the difference is that it returns true if it finds even a single elemnet satisfies the condition and false if callback function returns false for every element in the array
ans = animals.some((str)=> str.length===3);
console.log(ans);

// fill method - used for filling array with the same element
let newArray = new Array(5).fill("hello");          // creating a new array with same elements
console.log(newArray);
newArray = [1,2,3,4,5,6];
newArray.fill(-1,2,5);                       // fills a specific part of an already existing array with desired same element -1(element to be filled), 2(starting index), 5(end index which is not included)
console.log(newArray);

// splice method - for inserting or deleting element somewhere in the array
// mutates original array: arrayname.splice(index(from where deletion or insertion is to be done),how many elements to be deleted from given index, element to be inserted at given index)
// it also returns the deleted value which can be stored into a variable
const arr = ["item1", "item2", "item3","item4"]
console.log(arr);
arr.splice(1,1);          // deletion
console.log(arr);
arr.splice(2,0,"newItem");          // deletion
console.log(arr);
arr.splice(1,2,"item5","item6");          // deletion and insertion together
console.log(arr);