// let a=21;
const m="hello";
export {m};

function print(){
    let aa=2;
    console.log(aa);
    if(true){
        let b=3;
        const c=4;
        var d=5;
        console.log(b,c);
    }
    console.log(d);
}
print();

try {
    setTimeout(()=>{
        // afdkl
    },1000);
    dddd;
} catch (error) {
    console.log(error.message);
}

const json=JSON.stringify({'name':'abcd'});

console.log(json);
try{
    let d=JSON.parse(json);
    if(d.age==undefined)
    throw new Error("age required");
}
catch(e){
    console.log(e.message);
}

const p={
    name:"abcd",
    add:"abcd"
}

let p2=Object.create(p);
p2.name="abbb";
p2.age=21;
console.log(p2.add);

