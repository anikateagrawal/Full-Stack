// console.log(5);
const fs=require("fs");
let c=1;
function callback(err,data){
    if(!err){
        console.log(data);
        c=c+1;
        // if(c<8)
        // fs.readFile(`q${c}.html`,"utf-8",callback);
    }
}

// fs.readFile("q.html","utf-8",callback);
// fs.readFile("q.html","utf-8",callback);
// fs.readFile("q2.html","utf-8",callback);
// fs.readFile("q3.html","utf-8",callback);
// fs.readFile("q4.html","utf-8",callback);
// fs.readFile("q5.html","utf-8",callback);
// fs.readFile("q6.html","utf-8",callback);
// fs.readFile("q7.html","utf-8",callback);

function outer(){
    console.log("outer is running");
    console.log("I am outer");
    console.log("outer is returning something");
    return function inner(){
        console.log("I am inner");
    }
}
let innerref=outer();
innerref();
