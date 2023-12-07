//Event Loop -> to perform non blocking input and output javascript is single thread
//Part of Global object = which is window
//WEB Apis : setTimeout, DOM api , fetch() , localStorage, console, location <- all part of browser not javascript//GE
//GEC -> Global execution context
//Callback Queue
//Event Loop -> only job is to continusly monitor event loop and call stack if function waiting to executed it takes it and send it too call stack 
//Micro-Task Queue -> with higher priority then callback queue fuction comes in it fist execute first
//All function come through promices come and store in microtask queue 
//Mutation Objser keep cheacking if there is some mutation in dome tree or not


console.log('first task');

setTimeout(()=>{
    console.log("Second Task");
})

console.log("next task");