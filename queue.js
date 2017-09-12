var assert = require('assert');

function Queue(){
    
}

Queue.prototype.enqueue = function(item){
    
};

Queue.prototype.dequeue = function(){
    return 'a';
};



(function test_queue(){
    var q = new Queue();

    q.enqueue('a');
    q.enqueue('b');
    q.enqueue('c');

    assert.equal('a',q.dequeue());
    assert.equal('b',q.dequeue());
    assert.equal('c',q.dequeue());

})();