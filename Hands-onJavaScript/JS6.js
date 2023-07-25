// iterables - entities on which for of loop can be applied eg: strings, arrays 
// array like objects - those entities which have length property and which can be accessed through index eg: string
// sets (iterable) - used in situations when we want tos tore and operate on unique values
let set1 = new Set([1,2,3]);           // any iterable can be passed in set sonstructor to create a set
console.log(set1);
set1= new Set([1,2,2,3])   // duplicate values are nota llowed in sets
console.log(set1);
console.log(set1[4]);                   // there are no indexes as order does not play a role that is why indexed access does not work
// We can create empty set too
// adding values in set
set1.add(4)                       // mutates the original set and adds the new element
console.log(set1); 
set1.add([5,6]);                   // element of any type can be  a part of set
console.log(set1);
set1.add("str");
console.log(set1);
set1.add([5,6]);                   // the same looking array was added because the two arrays have different memory space in heap
console.log(set1);

// has() - to check whether an element is present in set or not. returns a boolean value
console.log(set1.has(2));

// for of loop in sets
for (let itr of set1)
{
    console.log(itr);
}

// finding length of set
console.log(set1.length);          // sets do not have length property
let count = 0;
for (let itr of set1)
{
    count ++;
    console.log(itr);
}
console.log(`length of set : ${count}`);

// maps object - it also stores key value pair like object literals
// in object literals keys are either string or symbol but in maps key can be of any type
const person = new Map();               // empty map
person.set("fName", "Bhumika")         // adding a key value pair
console.log(person);
person.set(1, "one");
console.log(person);
// accessing key value pair in maps using get() (cannot be accessed by any of the techniques used for accessing in object literals)
console.log(person.get("fName"));        // accessing the value through key
let mapKeys= person.keys();              // getting all the keys. It gives a map iterator which is iterable
for(itr of mapKeys){
    console.log(`key: ${itr}, type of key: ${typeof itr}, value: ${person.get(itr)}`);
}