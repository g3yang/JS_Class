const greet = ()=>{
    const currHour = new Date().getHours();
    if(currHour<12){
        return 'Good morning';
    }else if(currHour>=12 && currHour<17){
        return 'Good Afternoon';
    } else{
        return 'Good Evening';
    }
};

module.exports = greet;