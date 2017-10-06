var express = require('express');
var bodyParser = require('body-parser');
var app = express();
let students = [];

app.use(bodyParser());

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
    let student = students.find(s=>{
        return s.id == id
    });
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
})
