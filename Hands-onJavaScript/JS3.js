//objects - they are used to represent real world entities, they store key value pairs and do not have index. Objects are reference types
// memory allocation procedure is same for all reference types
const person ={
    name:"Bhumika", 
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













