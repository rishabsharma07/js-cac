// for each 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(val){  //here we have to give a callback function i.e a fucntion without name
    // console.log(val);
})
//or
coding.forEach((item)=>{
    // console.log(item);
    
})
//or
function printME(item){
    // console.log(item);
    
}
coding.forEach(printME)


//objects inside array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})