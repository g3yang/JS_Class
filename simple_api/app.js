var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

app.listen(8000, function(){
	console.log('Server started!');
});

app.get('/', function(req,res){
    res.send('Hello');
});


app.get('/students',function(req,res){
    res.send(students);
});

app.post('/students', function(req, res){
    var id = req.body.id;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    students.push({
        id:id,
        firstName:firstName,
        lastName:lastName
    });
    res.send();
})
