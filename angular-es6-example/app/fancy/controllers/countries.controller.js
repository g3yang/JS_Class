function CountriesCtrl(){
    this.countries =  ['Austria','Hungaria','Germany'];
    this.newCountry = '';
    this.add = function(){
        this.countries.push(this.newCountry);
    } 
}

export default CountriesCtrl;