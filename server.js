var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':{
    title:'First',
    date:'14 march 2014',
    content:`
       	     <p>
	  	   Hello everyone to article one
	     </p>
	     <p> i love the content of the michello and want to see it further
	 	  i will follow it
	     </p>
  `
  
  },
    'article-two':{
    title:'second',
    date:'16 march 2014',
    content:`
	     <p>
		  Hello everyone here in the campus
	     </p>
  `
  },
    'article-three':{
    title:'third',
    date:'18 march 2014',
    content:`
	     <p>
		  peacock conm
	     </p>
  `
  },
};
function createtemplate(data){
  var title=data.title;
  var date=data.date;
  var content=data.content;
  var htmltemplate=`
  <html>
    <head>
      <title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href="/ui/style.css" rel="stylesheet" />
      </title>
    </head>
    <body>
      <div class="container">
        <a href="/">Home</a>
      
      	<hr/>
      	<div>
	  title:${title}
      	</div>
      	<div>
	  date:${date}
      	</div>
      	<div>
	  content:${content}
      	</div>
      </div>
    </body>
  </html>
  `; 
  return htmltemplate;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
  var articleName = req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
