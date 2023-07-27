// OOPs in Javascript

// creating a template using function for creating objects
// function creating object and returning it - used when we have to create several objects with same properties and methods 
    // function createUser(fname, lname, age, email, address)
    // {
    //     const user ={};
    //     user.firstName = fname;
    //     user.lastName = lname;
    //     user.age = age;
    //     user.email = email;
    //     user.address = address;
    //     user.about = function(){console.log(`I am user ${this.firstName} ${this.lastName}.`)};
    //     user.is18 = function(){return this.age>=18};
    //     return user;
    // }
    // const user1 = createUser("Bhumika","Chauhan", 20, "abc@gmail.com", "my address")
    // console.log(user1);
    // let adult = user1.is18();
    // console.log(adult);
    // user1.about();
// the above way takes a lot of space as the object methods which do common task are created again and again when a new object is created
// in order to avoid this, the methods can be declared separately in another object and then use the reference of that funtion to another variable when a new user/ object is created. thus the functions will be created only once and will be pointed by the variables of all other users created
const userMethods ={
    about : function(){console.log(`I am user ${this.firstName} ${this.lastName}.`)},
    is18 : function(){return this.age>=18}
};
function createUser(fname, lname, age, email, address)
{
    const user ={};
    user.firstName = fname;
    user.lastName = lname;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;   // about stores the reference of userMethods.about and when about is called it goes to this address and call that function
    user.is18 = userMethods.is18;
    return user;
}
const user2 = createUser("Spraha","Tomar", 21, "abc123@gmail.com", "my address1")
console.log(user2);
adult = user2.is18();
console.log(adult);

// Object.create(obj)
// this is used to create an empty object
// it uses an object reference to link the current empty object being created with the object passed in create().
// whenever a key of the object created using object.create(obj) is used it first seraches within the object, if not found it searches for that key in the object reference(set as __proto__) provided in create() and uses it.
const obj1 ={
    key1: "val1",
    key2: "val2",
    key3: "val3obj1"
}
const obj2 = Object.create(obj1);
console.log(obj2);                  // creates empty object referenced/linked with obj1 
obj2.key3 = "val3obj2";
obj2.key4 = "val4";
console.log(obj2.key3);            // looks in obj2 first
console.log(obj2.key2);            // looks in __proto__ if the asked key is available
console.log(obj2.__proto__);      // the reference object is mentioned in  __proto__ or [[Prototype]]. The __proto__ of obj2 is set as obj1. These are different from prototype property described later

 // now if we have to add several such functions in the userMethods object then we need to create a variable for each of such function in the createUser function. To avoid this we can set the __proto__ of user object created in line 30 to userMethods
// This can be done by replacing "const user ={};" with "const user = Object.create(userMethods);" and removing all the method declarations/ variables from it(line 36,37)

// functions as objects - functions in javascript are functions but are also objects
// name property of a funtion - tells function name
function hello(){
    console.log("Hello!");
}
console.log(hello.name);
// adding a property in function
hello.newProp = "hello world";       // added a key value pair
console.log(hello.newProp);

// functions provide us with empty object called prototype where key value pairs or properties can be added 
console.log(hello.prototype);                // only functions provide prototype
hello.prototype.abc ="abc";                 // adding property in prototype
hello.prototype.func = function(){
    console.log("inside prototype");
}
console.log(hello.prototype);

// the function prototype of creatUser can be used instead of object UserMethods and createUser.prototype can be set as __proto__

// new keyword - 1. it creates empty object this ={}, 2. it then returns this so there is no need to use return this in function, 3. does the work of Object.create(functionName.prototype) and sets the __proto__ for object as the function prototype
function Table (tableOf){            
    this.tableOf = tableOf;
}
Table.prototype.arr = [1,2,3,4,5,6,7,8,9,10];
Table.prototype.calculateTable = function(){
    for(num of this.arr){
        console.log(`${this.tableOf} X ${num} = ${this.tableOf*num}`);
    }
}
const tableOf3 = new Table(3);
tableOf3.calculateTable();
for(let key in tableOf3)             // here it tells all the properties including the ones in prototype
{
    console.log(key);
}
// by convention the name of constructor functions that will create objects using new are started with capital letter

// hasOwnProperty() - returns a boolean value when a key is passed in it denoting whether the key belongs to the objects own property or not
for(let key in tableOf3)             
{
    console.log(key, tableOf3.hasOwnProperty(key));
}


// prototypes in array
// all the methods of arrays that we use are in the prototype
console.log(Array.prototype);
// when we create an array directly, nternally it is being created using new

//arrays have their prototype in the form of array
numbers =[1,2,3];
console.log(Object.getPrototypeOf(numbers));     // another way
console.log(Array.isArray(Array.prototype));     // prototype of array is an array itself
console.log(Array.isArray(Object.getPrototypeOf(numbers)));

// changing the default type of function prototype from object to array
function hi()
{
    console.log("hiee");
}
console.log(hi.prototype);   // it is object right now
hi.prototype = [];
console.log(hi.prototype);   // changed to empty array, although this is of not as such any use

// when there are a lot of functions to be added to the function prototype it becomes hectic to keep on adding keywalye pair in prototype for every new method so classes are used
class user{
    constructor(fname, lname, age, email, address){                      // used for creating object and returning then back
        console.log("inside constructor");
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    about(){                                               // functions that we were defining in prototype can be defined directly in class
        console.log(`I am user ${this.firstName} ${this.lastName}.`)
    }
    is18(){
        return this.age>=18
    }
}
// all the objects are created using new keyword when classes are used to create objects because constructor is called when new is used
const user1 = new user("Soham", "Bose", 21, "bose@gmail.com", "India...");
console.log(user1);
console.log(user1.firstName);
user1.about();
console.log(Object.getPrototypeOf(user1));
// at the backend everything happens same as happened when constructor function was used

// inheritance - for resuing classes so that we do not have to rewrite same things againa and again 
class person{                                        // base class
    constructor(name, age, adharid, mobno){
        this.name = name;
        this.age = age;
        this.adharid = adharid;
        this.mobno = mobno;
        
    }
    identity(){
        console.log(`My name is ${this.name} and i hold aadhar id - ${this.adharid}`);}
    personalDetail(){
        console.log(`My age is ${this.age} and mobile no. is ${this.mobno}`);
    }
}
const person1 = new person("Bhumika", 20, 567344272, 123456789);
person1.identity();
class stud extends person{                  // subclass - it inherits everything from base class

}
const stu1 = new stud("khushi", 20, 9129044272, 5564233189);          // object or instance of subclass
stu1.identity();

// super keyword - when we want to add new properties to subclass then, the inherited properties can be accessed by the constructor of base class so indorder to to that the super keyword is used
class student extends person{  
    constructor(name, age, adharid, mobno, sid, course){
        super(name, age, adharid, mobno);
        this.sid = sid;
        this.course = course;
    } 
    identity(){
        console.log(`My name is ${this.name} and i hold aadhar id - ${this.adharid} and sid- ${this.sid}`);}        // the same(name) function of parent class is modified in subclass and whenever called from an object of subclass, this one will be given preference
    stuDetail(){
        console.log(`My sid is ${this.sid} and I am enrolled in course ${this.course}`);
    }           
}
const stu2 = new student("khshboo", 21, 444555666777, 7786543902,"R223459876", "AI/ML");
stu2.stuDetail();
stu2.identity();

// getter - it is a method that returns the value of a propperty (note that a getter method always returns and it does not need to be called as obj.geterFunctionName(), it can be called as a property obj.geterFunctionName) 
// setter - its is a method that is used to set value of properties( after they have been passed while creating object) nothing different just a function created with keyword set to change value which could also be changed directly (like getter setter can also be called to change value like changing value of properties)
// both getter ans setter ,ethods can have the same name
class Name{
    static prop ="I belong to class";
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    get fullname(){
        return `${this.fname} ${this.lname}`;
    } 
    set fullname(fullname){
        const[fname , lname=this.lname] = fullname.split(" ");         // performing a task(can be any way we want to set the values)- here it uses split method to separate the given string and set values
        this.fname = fname;
        this.lname = lname
    }
    static printHi(){
        console.log(`Hi`);
    }
}
const name1 = new Name("Rohan", 'Negi');
console.log(name1.fullname);
name1.fullname = "Vipul Chaudhary";
console.log(name1.fullname);
name1.fullname = "Drishti";
console.log(name1.fullname);

// static method and static properties - till now all the methods and properties were used through the name of object as separate copies of methods and properties was being created for separate object If we declare them static then there will be single copy belonging to class and the same copy being shared by all objects
// these cannot be called using object instead they are called using class name. In the above class printname is a static method
Name.printHi();    //static method
console.log(Name.prop);  // static property