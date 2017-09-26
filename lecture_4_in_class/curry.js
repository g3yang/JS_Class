function print(method, step, substep, result){
    var out = [method, step, substep, result].join('-');
    console.log(out);
}



var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  return function() { 
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments)
    ));
  };
};


var printCrr = curryIt(print, 'Job collectAttribution', 'Step 1');

printCrr('Substep 1', 100);
printCrr('Substep 2', 200);
printCrr('Substep 4', 'Completed');

print('Job collectAttribution', 'Step 1','Substep 1', 100);
print('Job collectAttribution', 'Step 1','Substep 2', 200);
print('Job collectAttribution', 'Step 1','Substep 4', 'Completed');