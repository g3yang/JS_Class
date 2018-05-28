function muli_by_n(n){
	return function (m){
		return n*m;
	}
}

function calc_total(price, rate){
	return price * (1+rate);
}

function calc_total_part(rate){
	return function(price){
		return price*(1+rate);
	}
}

var onTotal = calc_total_part(0.13);
var p1 = onTotal(100);
var p2 = onTotal(200);
var p3 = onTotal(10000);

calc_total(100, 0.13);
calc_total(200, 0.13);
calc_total(300, 0.13);

var module = (function (counter){
	return {
		getCounter: function(){
			return counter;
		},
		incCounter: function(){
			counter+=1;
		}
	}
})(10);




console.log(module.getCounter());

