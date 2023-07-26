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
let person1 = {
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

// methods - functions inside object
person1 ={
    id:1,
    fname: "Bhumika",
    age: 20,
    sayHi: ()=>{console.log("hi! I am Bhumika");},
    refer1: function(){console.log(this);},    // using function() this gives current object
    refer2: ()=>{console.log(this);}      //using arraow function uses object for this from its surrounding (here the surrounding is global object) which is one level outside where it is used
}
person1.sayHi();

// this keyword- it refers to the current object(the object which is in use currently during runtime) and we have to use it while accessing properties inside methods
person1.about = function(){
    console.log(`My name is ${this.fname}, my age is ${this.age}`);      // if we directly write fname and age instead of this.fname and thid.age then it wil show error saying fname and age not defined
}
person1.about();
// this looks for values of properties during runtime and uses them
person1.refer1();
person1.refer2();
function identity(){
    console.log(`I am user${this.id}, ${this.fname} `)
}
identity();   // right now there is no current object using it so it gives undefined 
let person2 ={
    id:2,
    fname: "Spraha",
    age: 21,
    sayHi: ()=>{console.log("hi! I am Spraha");}, 
    about: identity,                             // used the above function as a method
    refer: currentObject
}
let person3 ={
    id:3,
    fname: "Soham",
    age: 20,
    sayHi: ()=>{console.log("hi! I am Soham" );},
    about: identity, 
    refer: currentObject      
}
person2.about();              // the function accesses the name and id of object calling it(current object during runtime)
person3.about();

// global object
console.log(this);              // javascript has a window object which is gloabal object provide by javascript itsef
console.log(window);           // another way to use above statement
console.log(this===window);
function func(){
    console.log("hello");
}
function currentObject()
{console.log(this);}
window.func();               // every function that we create becomes a part of global object
currentObject();            // this is why the function also shows Window on this
// using strict mode to avoid refering to global object while using this without any object
function noGlobalObject()
{   "use strict"
    console.log(this);}
noGlobalObject();      // this gives undefined instaed of window         

// call function - it takes object as argument and is used to access the method of an object through another object 
const listener1 = {
    id: 24,
    likedSong: "Chasing fire",
    info: function(artist){
        console.log(`user${this.id} likes song ${this.likedSong}, by artist ${artist}.`)
    }
}
listener1.info("Lauv");
const listener2 = {
    id: 49,
    likedSong: "Attention",   
}
listener1.info.call(listener2, "Chatlie Puth");         // if function has any arguments then they can also be passed in the call() after object
// call() will work the same for a function which is defined independently 
let rate = function(songRate){
    console.log(`user${this.id} rates the song ${this.likedSong}, by ${songRate} stars.`)
}
rate.call(listener1, 4.2);              //syntax is changed to functionName.call(object, parameter) as it is an independent function
// it can also be used with simple functions without passing anything in the call() - functionname.call(), it will run the same as functionName())
// note that if info method was created using arrow function or rate was created using arrow function then passing another object in call() woul not change this from window/ global object to that  passed object 

// apply function - it does the same thing as call function the difference is that it does not take separate arguments instead it takes an array for arguments
rate = function(songRate, artist, artistRate){
    console.log(`user${this.id} rates the song ${this.likedSong}, by ${songRate} stars ansd artist ${artist} by by ${artistRate} stars.`)
}
rate.apply(listener2, [3.2,"Charlie Puth", 4]); 

// bind function - it is same as call function but instead of calling the function for object it returns that function so that it can be saved in variable and called in future
const func1 = rate.bind(listener1,4,"Lauv", 4); 
func1();

// short syntax altyernate for methods of objects
    // const listener1 = {
    //     id: 24,
    //     likedSong: "Chasing fire",
    //     info(artist){
    //         console.log(`user${this.id} likes song ${this.likedSong}, by artist ${artist}.`)
    //     }
    // }