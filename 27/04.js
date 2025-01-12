//for in

//for object, for in loop is used


const lang= {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in lang) {
    //console.log(key); //it will only print the keys
    console.log(`${key} is key and ${lang[key]} is value`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key)  //it will print the keys of array i.e index
    console.log(`index ${key} and value ${programming[key]}`);
    
}


//for in loop doesnt work on maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

