
module.exports = function createDreamTeam(arr) {
  if(Array.isArray(arr) === true){
    let team = '';
  for(let str of arr){
    let x = '';
    if(typeof str === "string"){
      let strClear = str.replace( /\s/g, "");
      team = team + strClear[0];
      console.log(strClear);
    }else{
      team = team
    }
  }
  //return team.toUpperCase().sort();
  return team.toUpperCase().split('').sort().join('');
  }else{
    return false;
  }
  
};