function muli_by_n(n){
	return function (m){
		return n*m;
	}
}

var multi_func = [];

for(var i=0; i<5;i++){

	(function(i){
		multi_func[i]= function(){
			return 2*i;
		}
	})(i);
}

multi_func.forEach(function(func){
	console.log(func());
});