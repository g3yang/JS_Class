var fs = require('fs');
var crypto = require('crypto');


fs.readFile('./cb.js', function(err, data){
    console.log(data.toString());
})
