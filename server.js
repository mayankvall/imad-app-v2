var express=require('express');
var morgan=require('morgan');
var path=require('path');

var app=express();
app.use(morgan('combined'));

app.get('/ui/index.html',function(req,res){
   res.sendFile(path.join(__dirname,'ui','index.html')); 
});
var server=app.listen(8080,function(){
    var host=server.address().address;
    var port=server.address().port;
    
    console.log('working on http://%s:%s',host,port);
})
