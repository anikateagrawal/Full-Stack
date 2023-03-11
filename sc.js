const fs=require('fs');
const n=1000000;
var s=""
for (let i=0;i<n;i++){
    s+=Math.floor(Math.random()*n)+" ";
}
s=s.trim();
fs.promises.writeFile('input04.txt',n+"\n"+s);