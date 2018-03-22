var express =  require('express');
var path = require('path');

var app = express();

//Middlewhare to define folder for static files
app.use(express.static('public'));

app.get('/', (req, res)=>
{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, ()=>
{
    console.log('Web-server is listening');
});