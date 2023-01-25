const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.statusCode(200);
        res.write("hello world");
        res.end();
    }
    else if(req.url==='/contact'){
        res.write('Welcome to contact page');
        res.end();
    }
    else {
        res.end('error! you are at wrong page');
    }
});

server.listen(5000);

console.log("Server is running on port 5000");
