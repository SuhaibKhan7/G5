const express=require('express');

const server=express();
server.get('/signup',(req,res)=>{
res.send('how are you');
console.log(req.body);
})

server.listen(4001,()=>{
    console.log('server started');
})