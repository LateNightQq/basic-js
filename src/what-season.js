const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return "Unable to determine the time of year!";
  this.date = date,
  mounth = date.getMonth();
  if(date.getYear() < 1970){
    var nullDate = new Date(0),
    diff = date.getTime() - nullDate.getTime(),
    finalDate = new Date(diff);
    mounth = finalDate.getMonth();
  }
  if(mounth === 11|| mounth === 0 || mounth === 1){
    return "winter";
  } else if (mounth >= 2 && mounth <= 4) {
    return "spring";
  } else if (mounth >= 5 && mounth <= 7) {
    return "summer"
  } else {
    return "autumn";
  }
};
