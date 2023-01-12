const fs=require('fs');
// fs.readFile("q.html","utf-8",callback);
var c=1;
function callback(err,data){
    if(!err){
        console.log(data);
        c+=1;
        if(c<4)fs.readFile(`q${c}.html`,"utf-8",callback);
    }
}


const path=require('path');
// console.log(path.join(__dirname,'q.html'));
// console.log(process.cwd());

async function srt(){
    d1=await fs.promises.readFile('q.html','utf-8');
    d1=d1.split(" ");
    d1=d1.map(eval);
    
    d2=await fs.promises.readFile('q2.html','utf-8');
    d2=d2.split(" ");
    
    d2=d2.map(eval);

    a1=d1.concat(d2);
    a1.sort((a,b)=>a-b);

    console.log(d1,d2,a1);
    s="";
    a1.forEach(e => {
        s+=e+" ";
    });
    await fs.promises.writeFile('q3.html',JSON.stringify(a1));
}
srt();
