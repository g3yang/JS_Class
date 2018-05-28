function createCounter(){
    var n = 0;
    function prettyMessage(){
        return 'The current counter is '+ n;
    }

    function increment(){
        n+=1;
    }

    function getValue(){
        return prettyMessage();
    }

    return {
        increment:increment,
        getValue:getValue 
    };

}

var counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());
