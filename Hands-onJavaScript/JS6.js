// iterables - entities on which for of loop can be applied eg: strings, arrays (objects are not iterable)
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

// maps object - it also stores key value pair like object literals. data is stored in ordered manner in maps means it will show in the same order in which we store
// in object literals keys are either string or symbol but in maps key can be of any type
let person = new Map();               // empty map
 // adding a key value pair using set()
person.set("fName", "Bhumika")        
console.log(person);
person.set(1, "one");
console.log(person);
// accessing keys, value pair in maps using get() (cannot be accessed by any of the techniques used for accessing in object literals)
// accessing the value through key
console.log(person.get("fName"));     
// getting all the keys. It gives a map iterator which is iterable   
let mapKeys= person.keys();              
for(itr of mapKeys){
    console.log(`key: ${itr}, type of key: ${typeof itr}, value: ${person.get(itr)}`);
}
// maps are iterable hence for of loop can be used directly
// accessing key value pair. 
for (let pair of person){                        //Returns the key and its value in an array                
    console.log(pair, Array.isArray(pair));
}
for([key, value] of person)                   // destructuring the array of key value pair and getting individual key and value in variables
{
    console.log(`key: ${key}, value: ${value}`);
}
// adding key value pairs using arrays
person = new Map([["firstname", "Bhumika"],["lastname", "Chauhan"],["age", 20]])
console.log(person);
// extending a key value pair in an already existing objects using maps
const user1 = {
    id: 1,
    fName: "Bhumika"
}
const user2 = {
    id: 2,
    fName: "Spraha"
}
let extraInfo = new Map();
extraInfo.set(user1, {age: 20, gender: "f"});              // here in the map key is the existing object and value is the properties to be added
console.log(extraInfo);
console.log(`userID: ${user1.id}, age: ${extraInfo.get(user1).age}`);
extraInfo.set(user2, {age: 21, gender: "f"});              // here in the map key is the existing object and value is the properties to be added
console.log(extraInfo);
console.log(`userID: ${user2.id}, age: ${extraInfo.get(user2).age}`);

// cloning object using Object.assign()
const obj2 = {
    key1:"value1",
    key2: "value2"
};
const newObj = Object.assign({},obj2);
console.log(obj2===newObj);

// optional chaining in objects
const person1 = {
    fName: "Bhumika",
    address: {hno : 123, colony: "civil lines"}
};
console.log(person1.address);
console.log(person1.address.hno);
// sometimes we know that sooner or later a particular property will be present in object and we want to access it then the folowing happens
console.log(person1.hobbies);         // if we try to access a non existing property it shows undefined
    //console.log(person1.hobbies.sports);  // iff we try to access further ahead in that property it gives error
// we don't want this error but instead we want it to show undefined in that case we use optional chaining
console.log(person1?.fName);   // the question mark denotes that proceed further only if pwerson 1 exists otherwise give undefined
console.log(person1?.hobbies); 
console.log(person1?.hobbies?.sports);     // now this doesn't give error because it proceeds further only if hobbies exist


