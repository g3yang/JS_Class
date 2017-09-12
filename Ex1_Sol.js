// (*) Determine if an number is an odd number
function isOdd(num){
    return num%2==1;
}

// (*) Return true if a number is even
function isEven(num){
    return num%2==0;
}


// (*) Find the largest number of the input array
function max(arr){
    
    var max = arr[0];
    for(var i=0;i<arr.length;i++){    
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}

function max_adv(arr){
    return arr.reduce(function(max, item){
        return item>max?item:max;
    })
}

// (*) Find the sum of the input array
// Ex [10,30,50] => 90
function sum(arr){
    return arr.reduce(function(total, item){
        return total + item;
    });
}


// (**) Sum the odd numbers in the input array
// Ex [3, 6, 8, 7] =>10
function sumOdds(arr){
    return arr.reduce(function(total, item){
        return isOdd(item)?total+item:total;
    },0);
}


// (***)  Reverse a string
// Ex "abcd" => "dcab"
function reverse(str){
    var res ='';
    for(var i=str.length-1;i>=0;i--){
        res +=str[i]
    }
    return res;
}

// (***) Sort an array with ascending order
// Ex [8, 5, 10, 1] => [1,5,8,10]
function sort(arr){
    for(var i=0; i<arr.length-1; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[j]<arr[i]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function swap(a,b){
    var temp = a;
    a = b;
    b = temp;
}


function verify(expected,actual){
    console.log(expected == actual?'passed':'failed' );
}


(function testSum(){
    console.log('-----------Testing Sum--------------')
    var arr = [10,20,2];
    var exp_out = 32;
    verify(exp_out, sum(arr));

    arr = [1,1,1];
    exp_out = 3
    verify(exp_out, sum(arr));
})();


(function testSumOdd(){
    console.log('-----------Testing SumOdd------------');
    var arr = [10,7,6,3,1];
    var exp_out = 11;
    verify(exp_out,sumOdds(arr));

    arr=[2,4,6,8];
    exp_out = 0;
    verify(exp_out, sumOdds(arr));
})();

(function test_max_adv(){
    console.log('-----------Testing ------------');
    var arr=[9,8,11,7];
    verify(11, max_adv(arr));
    var arr=[1,1,3,100];
    verify(100,max_adv(arr));
})();


(function test_reverse(){
    console.log('-------Test Reverse-----------');
    var input='hello';
    verify('olleh', reverse(input));
})();


(function test_sort(){
    console.log('---------Test Sorting-----------');
    var arr = [5,4,3,2,1];
    sort(arr);
    console.log(arr);

    arr = [3,2,10,9];
    sort(arr);
    console.log(arr);

 
})();