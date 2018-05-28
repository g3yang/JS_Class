
function findOdds(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
    return result;
}

var cars = [
    { make: 'BMW',
      model: '325',
      year: 2018
    },
    { make: 'Ford',
      model: 'escape',
      year: 2014
    },
    { make: 'BMW',
      model: 'x5',
      year: 2013
    },
    { make: 'Ford',
      model: 'Focus',
      year: 2015
    }
];

function findCarsByMake(cars, make){
    var result = [];
    for(var i=0;i<cars.length;i++){
        if(cars[i].make == make){
            result.push(cars[i]);
        }
    }
    return result;
}

function addFieldOld(cars){
    for(var i=0; i<cars.length;i++){
        if(cars[i].year>=2015){
            cars[i].old = false;
        } else {
            cars[i].old = true;
        }
    }
}


cars.forEach((car)=>{
    car.old = car.year>=2015? false:true;
});

var audiCars = cars.filter((car)=>{
    return car.make === 'Audi';
});

var aCar = cars.find((car)=>{
    return car.make === 'BMW';
});

var newCars = cars.map(car=>{
    return {
       make: car.make,
       old: car.old
    }
});

var nums = [1, 2, 3, 11, 14, 15];

var sum = nums.reduce((accum, num)=>{
    return accum + num;
});

var maxNum = nums.reduce((maxNum, num)=>{
    return num>maxNum?num:maxNum;
})


console.log(maxNum);
