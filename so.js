const fs=require('fs');

async function fun(){
    const data=await fs.promises.readFile('input04.txt','utf-8');
    let d=data.split('\n');
    let n=Number(d[0]);
    let o="";
    a=[];
    for( let i in d[1].split(" ")){
        i=Number(i);
        a.push(i);
    }
    a.sort();
    
    for(let i in a){
        o+=i+" ";
    }
    await fs.promises.writeFile('output04.txt',o.trim());
    
}
fun();
 async function fun2(){
    const dd=await fs.promises.readFile('output04.txt','utf-8');
    console.log((dd.split(' ')).length);
 }
 fun2();