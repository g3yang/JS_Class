
function level(grade){
    if(grade>90){
        return 'Outstanding';
    } else if(grade<90 && grade>70){
        return 'Good';
    } else if(grade<70 && grade>50){
        return 'Satisfactory';
    } else {
        return 'Failed';
    }
}

console.log(level(91));
console.log(level(80));
console.log(level(67));
console.log(level(40));

