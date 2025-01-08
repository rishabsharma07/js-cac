// const appUser = new Object() //this is singleton object else everything is same
const appUser={}  //this is non singleton object

appUser.id= "123abc"
appUser.name= "Rishab"
appUser.isLoggedIn= false

console.log(appUser);

const regularUser={                   //object inside object
    email: "some@mail.com",
    fullname: {
        userFullName:{
            firstName: "rishab",
            lastName: "sharma"
        }
    }
}

console.log(regularUser.fullname.userFullName.lastName); //to access object inside object   

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4= {obj1,obj2,obj3}  //this will not add the two objects else it will give object inside object
// const obj4= Object.assign({},obj1, obj2, obj3) //it is recommended to add {} in the first 
// console.log(obj4)

//or

const obj4= {...obj1,...obj2,...obj3}
console.log(obj4)

const users = [                                    //array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email);  //to access array of objects

console.log(Object.keys(appUser));  //gives keys of object in array
console.log(Object.values(appUser)); //gives values of object in array
console.log(Object.entries(appUser)); //gives array of each key value pair in a whole array

console.log(appUser.hasOwnProperty("isLoggedIn")) //to check the key of an object
console.log(appUser.hasOwnProperty("isLogged"))
 


//DeStructuring of Object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instruct}=course  //by using this syntax >> const{}=objectName, we can easily extract the value of a key of object
//here we take the courseinstructor key as instruct and can print it without course.courseinstructor
//we can simply write the short name and print it

console.log(instruct);


//can be done by this too
// const {courseInstructor}=course
// console.log(courseInstructor);
