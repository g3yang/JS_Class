
var sum = 0;
for(var i=1 ;i<=100; i++){
    sum +=i;
}

function sumRange(a, b){
    var sum = 0;
    for(var i=a;i<=b;i++){
        sum+=i;
    } 
    return sum;
}


var students = ['Michelle', 'Shirley', 'Max', 'Steven'];

function find_SStudents(students){
    var s_students = [];
    for(var i=0;i<students.length;i++){
        if(students[i].charAt(0)=='S'){
            s_students.push(students[i])
        }
    }
    return s_students;
}

var s_students = find_SStudents(students);
console.log(s_students);
//console.log(sumRange(6,9));