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


var pages={
  'pages-one':{
      title:"pages-one",
      date:"26th sep 2017",
      content:`<p>hello world
      </p>
      <p>
        I am back
      </p>
      `
  },
};
function template(data)
{
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var htmltemplate=`
    <html>
        <body>
            <div>title:${title}</div>
            <div>date:${date}</div>
            <div>${content}</div>
        </body>
    </html>
`
    
}

app.get('/:pagesname',function(req,res){
    var pagesname=req.params.pagesname;
   res.send(template(pages[pagesname])); 
});
app.listen(8080, function () {
   
   
   console.log("app listening on port 8080");
})
