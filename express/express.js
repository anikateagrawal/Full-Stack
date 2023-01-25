/*
npm init -y
npm i express
npm i -g nodemon
npx nodemon express.js
*/
const express=require('express');
const app=express();
const port=8000;

app.listen(port,()=>{
    console.log("server is running at port ",port);
});

// app.use((req,res)=>{
//     res.send("server running");
// });

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params);
    const {subreddit}=req.params;
    res.send(`you are watching ${subreddit}`);
});

app.get('/search',(req,res)=>{
    console.log(req.query);
    const {q}=req.query;
    res.send(`searching ${q}`);
})

app.get('*',(req,res)=>{
    res.send("you are at wrong page");
})

