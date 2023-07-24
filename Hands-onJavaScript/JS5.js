// important array methods

// for each method - it takes a callback function and then on its own pass the elements and its index  in the array one by one in the callback function
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
    {pid : 1,pprice: 4000},
    {pid : 1,pprice: 500},
    {pid : 1,pprice: 300}
]
const totalPrice = userCart.reduce((total, currentProduct)=>{
    return total+currentProduct.pprice; 
}, 0)
console.log(totalPrice);