//Event Loop -> to perform non blocking input and output javascript is single thread

//Part of Global object = which is window
//WEB Apis : setTimeout, DOM api , fetch() , localStorage, console, location <- all part of browser not javascript//GE
//GEC -> Global execution context

console.log("Start");

setTimeout(function cb(){
    console.log("CallBack");
},5000)
console.log("End");