function sum(){

    var argArr = Array.prototype.slice.call(arguments); 
    var res = argArr.reduce((total,x)=>{
        return total+x;
    })        
    return res;
}

console.log(sum(1,2,100,10));
