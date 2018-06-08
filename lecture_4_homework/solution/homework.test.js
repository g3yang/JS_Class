var hw = require('./homework');

describe('Test difference',()=>{
    it('Two same array', ()=>{
        var arr1 = [1,2,3];
        var arr2 = [1,2,3];
        expect(hw.findDifference(arr1,arr2)).toEqual([]);
    });

    it('No element in common',()=>{
        var arr1 = [1,2];
        var arr2 = [3,4];
        expect(hw.findDifference(arr1,arr2)).toEqual([1,2]);
    });

    it('Some in common',()=>{
        var arr1=[1,4,5];
        var arr2=[4,5,6];
        expect(hw.findDifference(arr1,arr2)).toEqual([1]);
    });
});


describe('Test Palindrom',()=>{
    it('One character',()=>{
        expect(hw.isPalindrome('s')).toBe(true);
    });

    it('A valid palindrom',()=>{
        expect(hw.isPalindrome('ada')).toBe(true);
    });

    it('A non valid palindrom',()=>{
        expect(hw.isPalindrome('adaa')).toBe(false);
    })
});

describe('Sum odds',()=>{
    it('No odds',()=>{
        expect(hw.sumOdds([2,4,6])).toEqual(0);
    });

    it('All odds',()=>{
        expect(hw.sumOdds([1,3,7,11])).toEqual(22);
    });

    it('Some odds',()=>{
        expect(hw.sumOdds([3,4,6,5])).toEqual(8);
    })
});

describe('Test get Fullnames',()=>{
    it('Regular',()=>{
        var persons = [
            {
                firstName:'doug',
                lastName: 'ford'
            },
            {
                firstName:'wyne',
                lastName: 'kathleen'
            }
        ];
        var expected = [
            {name:'DOUG FORD'},
            {name: 'WYNE KATHLEEN'}
        ];
        expect(hw.getFullNames(persons)).toEqual(expected);
    });
})