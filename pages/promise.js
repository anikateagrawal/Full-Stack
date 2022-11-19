// async function job(data) {
//     const p=new Promise(function(resolve,reject){
//         if(!isNaN(data)){
//             if(data%2==0){
//                 setTimeout(()=>{
//                     reject("even");
//                 },2000);
//             }
//             else{
//                 setTimeout(()=>resolve("odd"),1000);
//             }
//         }
//         else {
//             reject("error");
//         }
//     })
//     return p;
// }



const fs = require("fs");

// job(50).then((data)=>console.log("data")).catch((data)=>console.log(data));

// const fs=require('fs');
// let readfile=fs.promises.readFile("q.html","utf-8");
// readfile.then((data)=>{
//     console.log(data);
// })

// async function abc(){

//     let data = await fs.promises.readFile("q.html","utf-8");

//     console.log(data)

// }
// abc();

// function abc(){
//     return new Promise((resolve,reject)=>{
//         let readfile=fs.promises.readFile("q.html","utf-8");
//         readfile.then((data)=>{
//             resolve(data);
//         })
//     })
// }
// abc().then((data)=>{
//     console.log(data);
// })

async function abc () {
    await fs.promises.writeFile("q1.html", "hello");
    let data = await fs.promises.readFile("q1.html", "utf-8");
    console.log(data);
    return "how are you";
}

async function main() {
    let data = await abc();
    console.log(data);
}
main();


// function ab(){
//     return new Promise((res,rej)=>{
//         fs.promises.writeFile("q1.html","hello").then(()=>{
//             fs.promises.readFile("q1.html","utf-8").then((data)=>{
//                 console.log(data);
//                 res("how are you");
//             })
//         })
//     })
// }

// function main(){
//     return new Promise((res,rej)=>{
//         ab().then((data)=>{
//             console.log(data);
//         })
//     })
// }
// main();


