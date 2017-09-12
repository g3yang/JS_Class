

function Stack(){
    // Initial stack is empty
    this._arr = [];
}

Stack.prototype.push = function(obj){
    // Your code goes here
};

Stack.prototype.pop = function(){
    // Your code goes here
}

Stack.prototype.isEmpty = function(){
    // Return true if there is no element in the stack
}

// Verify if a string has proper open and closing parentheses
function hasRightParentheses(str){
    // Your code goes here
    return false;
}



(function test_check_parentheses(){
    console.log(hasRightParentheses('sdsdsd')==true?'passed':'failed');
    console.log(hasRightParentheses('(nicolas)')==true?'passed':'failed');
    console.log(hasRightParentheses('((joe)')==false?'passed':'failed');
    console.log(hasRightParentheses('((joe))))')==false?'passed':'failed');
    console.log(hasRightParentheses('(joe)(smith)')==true?'passed':'failed');
})();