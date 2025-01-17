function randomColor (){
    const hex = '0123456789ABCDEF';
    let color= '#'

    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]  
    }
    return color;
}

let interval;

const startChange= function(){
    if(!interval){
        interval= setInterval(changeColor,1000)

    }
}

function changeColor(){
    document.body.style.backgroundColor= randomColor()
}
const stopChange= function(){
    clearInterval(interval)
    interval=null
}

document.querySelector('#start').addEventListener('click',startChange)
document.querySelector('#stop').addEventListener('click',stopChange)
console.log(randomColor)