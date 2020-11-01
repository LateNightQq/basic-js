const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity === "string"){
        let num = parseInt(sampleActivity);
            if(Number.isInteger(num) === true && num<15 && num>0){
                let total = (Math.log(sampleActivity/MODERN_ACTIVITY))/(0.693/HALF_LIFE_PERIOD);
                 return Math.abs(Math.ceil(total));
            }else{
                return false;
            }
        }else{
            return false;
        }
    };


