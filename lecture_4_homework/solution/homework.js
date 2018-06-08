var _ = require('lodash');


var homework = {
    /**
     * difference([1, 2, 3], [100, 2, 1, 10]))
     * Expected output [3,10, 100]
     */
    findDifference: function(arr1, arr2){
        return _.difference(arr1, arr2);
    },
    /**
    * Get the union of two arrays
    * Example: ([1,2,3],[2,3,4]) => [1,2,3,4]
    */
    getUnion: function(arr1, arr2){
        return _.union(arr1, arr2);
    },
    /**
     * Sum all odd numnbers
     * Ex: [2,4,5,7] =>12
     */
    sumOdds: function(arr){
        var odds = arr.filter(num=>{
            return num%2 !=0;
        });

        return odds.reduce((sum, curr)=>{
            return sum + curr;
        }, 0);
    },
    /**
     * Check if a string is palidrome.
     *  Ex: ada=> true, illi=>true, kill => false
     */
    isPalindrome: function(s){
        for(var i=0;i<s.length/2;i++){
            if(s[i] != s[s.length-1-i]){
                return false;
            }
        }
        return true;
    },
    /**
     * Return a new array that concate the first name and last name, 
     * then make it upper case
     * Ex [{firstName:'Joe', lastName:'Smith}] => [{name: 'JOE SMITH'}]
     */
     getFullNames: function(persons){
         return _.map(persons,p=>{
             var name = p.firstName+' '+p.lastName;
             return {name: name.toUpperCase()};
         });
     }
};

module.exports = homework;