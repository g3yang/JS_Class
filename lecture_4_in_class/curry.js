function print(method, step, substep, result){
    var out = [method, step, substep, result].join('-');
    console.log(out);
}



var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  console.log(parameters);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};


var printCrr = curryIt(print);

printCrr('Job collectAttribution')('compute sales')('total')(40);