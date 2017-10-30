var express = require('express');
var bodyParser = require('body-parser');
var myLogger = require('./MyLogger');
var app = express();
let students = [{
    firstName: 'Joe',
    lastName: 'Smith',
    email: 'joe.smith@mail.com',
    id: 1,
},{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@mail.com',
    id: 2 
}];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(bodyParser());

app.use(myLogger);


app.listen(8000, function(){
	console.log('Server started!');
});

app.get('/', (req,res)=>{
    res.send('Hello');
});


app.get('/students',(req,res)=>{
    res.send(students);
});

app.post('/students', (req, res)=>{
    let id = req.body.id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let student = students.find(s=>s.id == id);
    if(student){
        return res.send(400, 'The provided ID already exists');
    } else {
        students.push({
            id:id,
            firstName:firstName,
            lastName:lastName
        });
        return res.send();
    } 
});


app.delete('/students/:id',(req,res)=>{
    let id = req.params.id;
    let index = students.findIndex(s=> s.id == id);
    students.splice(index,1);
    return res.send();
});

app.get('/students/:id',(req,res)=>{
    let id = req.params.id;
    let student = students.filter(s=>s.id==id);
    return res.send(student);
});
