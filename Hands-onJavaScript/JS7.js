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















