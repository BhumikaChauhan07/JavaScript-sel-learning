//objects - they are used to represent real world entities, they store key value pairs and do not have index. Objects are reference types
// memory allocation procedure is same for all reference types
const person ={
    name:"Khushi", 
    name:"Bhumika",                               //remember that one key can ocuur only once in an object however a value can repeat. Also if we make two keys of same name then the latest key(created after) will be referd by that key name
    age:20,
    hobbies: ["guitar","badminton","painting"]
}                                                   //creating object
console.log(person);
console.log(typeof person);             // objects are also called object literal to differntiate it as all refernce types are objects


// accessing data from objects
console.log(person.name);               // the data members of objects are refered as properties of object
console.log(person.hobbies); 
// another way
console.log(person["name"]);          // in javascript the key is by default treated as a string
console.log(person["hobbies"]); 

// adding a key value pair in an already existing object
person.gender ="female";
console.log(person);
// another way 
person["status"] = "undergraduate";
console.log(person);

//differenece between bracket and dot notation- we can refer to properties without the double quotes in dot notation but cannot do so in bracket notation
// bracket notation is useful when the property name has two words with space in between
const fruits ={
    "fruit name": ["apple, banana, orange"],
    "fruit color": ["red","yellow", "orange"]
}
console.log(fruits["fruit color"]);
// bracket notation is also very helpfun in situation where we want the key to be a value stored in a variable 
const key ="email";
    //person.key ="bhumikachauhan2002@gmail.com"     // this creates a property with the name key but thats not what we want we want the property name to be the value store in key constant
person[key] = "bhumikachauhan2002@gmail.com"         // we did not put it in double quotes because we dont want key as the property name, this takes the value of key and uses it as property name
console.log(person);
console.log(person.email);

// iterating object through for in loop
for(let key in person)
{
    console.log(key);              // for getting keys
}
for(let key in person)
{
    console.log(person.key);          // this results in undefined because dot notation does not use the value stored in key but insteads searches for key itself as a property of the object   
}
for(let key in person)
{
    console.log(person[key]);      // for getting values of keys
}
for(let key in person)
{
    console.log(`${key} : ${person[key]}`);      // using template string to get key value pair
}
console.log("Anotherway of gettinhg string value pair");
for(let key in person)
{
    console.log(key,":", person[key]);
}

// iterating object using Object.keys()
console.log(Object.keys(person));         // gives an array of the keys

// computed properties
const key1 ="objkey1";
const key2="objkey2";
const value1 ="objvalue1";
const value2 ="objvalue2";
const obj = {
    [key1] :value1,
    [key2] :value2
};
console.log(obj);
// another way
    //obj[key1] = value1;
    //obj[key2] = value2;

// spread operator in object can be used for cloning
// spread basically breaks an iterable entity(sucha as array , string, objects (numbers do not operate with it)) written in front of it, to its individiual elements like a string would be spread into individual letters, array into elements, etc
const obj1 ={
    key1: "val1 of obj1",
    key2: "val2"
};
const obj2 ={
    key1: "val1 of obj2",
    key3: "val3",
    key4: "val4"
};
let obj3 = obj1;
console.log(obj1=== obj3);
console.log(obj3);
obj3 = {...obj1};
console.log(obj1=== obj3);
console.log(obj3);
// note that if both the objects which are spread have the same key then the new object will have the key of object which is spread later
obj3 ={...obj1, ...obj2};
console.log(obj3);
obj3 ={...obj2, ...obj1};
console.log(obj3);
obj3 ={...obj1, ...obj2, keyExtra :"newkey"};
console.log(obj3);

// if we don not provide any key  and directly spread an iterable then by default the respective index is treated as a key (although these numbers too are in string format)
let obj4 = {..."abcde"}
console.log(obj4);
arr = ["p", "q", "r","s", "t"];
obj4 = {...arr}
console.log(obj4);

//object destructuring
const band ={
    bandName : "One-direction",
    famousSong: "History",
    year: 2001,
    anotherSong : "Infinity"
};
const {bandName:var1, famousSong, ...restProperties}= band;      // while destructing object the variable name must exaclty match the property name by default but a colon can be used to create a new  variable name
console.log(var1, famousSong);                                   // if colon is used then the new name (var1) will be used bandnName as a variable name now will give error
console.log(restProperties);                                     // the remaining properties were stored in a new object resProperties using spread operator

// objects inside array
const users = [
    {Name: "Bhumika", gender: "female", age: 20},
    {Name: "Spraha", gender: "female", age: 21},
    {Name: "Nishtha", gender: "female", age: 19},
    {Name: "Shradha", gender: "female", age: 19}
]
console.log(users);
for(let user of users)
{console.log(user)};

// nested destructuring
let [user1,user2,...twinUsers] = users;            // this is normal array destructuring
console.log(user1, user2,twinUsers);
// i want specific info about users say the name of first user , gender of second and age of fourth user
[{Name:User1Name},{gender:user2Gender}, ,{age:user4Age}] = users;       // nested destructuring
console.log(User1Name, user2Gender, user4Age);