const express=require('express');
const app=express();
const port=8080;

app.listen(port,()=>{
    console.log("server is running at port ",port);
});

app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.render('index');
})