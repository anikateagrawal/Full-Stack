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

let a=true;
// setTimeout(()=>
// a=false,1000);
// while(a){
//     console.log("hello");
// }

setInterval(()=>{
    if(a){
        console.log("hello");
    }
},1000);

setTimeout(() => {
    a=false;
}, 5050);


const p=new Promise(function(res,rej){
    setTimeout(()=>{
        let randomNum=Math.floor(Math.random()*10);
        if(randomNum%2==0){
            res(randomNum);
        }
        else{
            rej(randomNum);
        }
    },2000);
});

p.then((data)=>{
    console.log("resolve "+data);
    return "abc";
}).then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log("reject "+data);
});