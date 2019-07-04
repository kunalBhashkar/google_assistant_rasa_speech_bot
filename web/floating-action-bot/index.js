var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/about', function (req, res)
{
    res.render('index1.html');
})




app.get('/', function(req, res){
   res.render('index1.html');
});

app.listen(3000);