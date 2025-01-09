// Immediately Invoked Function Expressions (IIFE)

//  global scope pollution problem se bachne ke liye and to immediately ivoke a function
//pollution means jb block scope gobal scope ke variables use krta hai

// defined by ()();

(function chai(){
    //named iife
    console.log("connected");   
})();

//unnamed iife

(()=>{
    console.log("connected two");
})();

((name)=>(console.log(`connected with ${name}`)))("rishab");

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )('rishab');

//to use more than 1 iife in a program terminate each iife with ; 