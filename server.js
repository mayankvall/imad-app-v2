var express=require('express');
var morgan=require('morgan');
var path=require('path');

var app=express();
app.use(morgan('combined'));

app.get('/',function(req,res){
   res.sendFile(path.join(__dirname,'ui','index.html')); 
});

app.get('/ui/style.css',function(req,res){
   res.sendFile(path.join(__dirname,'ui','style.css')); 
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.listen(8080, function () {
   
   
   console.log("app listening on port 8080");
})
