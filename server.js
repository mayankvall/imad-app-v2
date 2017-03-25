var express=require('express');
var morgan=require('morgan');
var path=require('path');

var app=express();
app.use(morgan('combined'));

app.get('/ui/index.html',function(req,res){
   res.sendFile(path.join(__dirname,'ui','index.html')); 
});
app.get('/ui/index.html',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});
app.get('/ui/index.html',function(req,res){
   res.sendFile(path.join(__dirname,'ui','style.css')); 
});

var server=app.listen(8081,function(){
    var host=server.address().address;
    var port=server.address().port;
    
    console.log('working on http://%s:%s',host,port);
})
