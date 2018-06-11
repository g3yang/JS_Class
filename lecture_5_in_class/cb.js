/**
setTimeout(()=>{
    console.log('Task 1 is Done');
    setTimeout(()=>{
        console.log('Task 2 is Done');
        setTimeout(()=>{
            console.log('Task 3 is done');
        }, 1000);
    }, 2000);
}, 3000);
*/


function getA(cb){
    setTimeout(()=>{
        let a = Math.floor(Math.random()*100);
        cb(a);
    }, 1000);
}

function getB(cb){
    cb(200);
}

function comp(){
    getA((a)=>{
        console.log(`Got A: ${a}`);
        getB((b)=>{
            console.log(`Got B: ${b}`);
            let c = a + b;
            console.log(`Sum: ${c}`);
        })
    });
}


comp();


console.log('End of the code!');