// Code your solution in this file
//function findMatching(drivers, name){
  //let matchingDrivers = drivers.filter(function(driver){
    //if (name.toLowerCase() === driver.toLowerCase()){
      //return true
    //} else {
      //return false
    //}
  //})
  //return matchingDrivers;
//}



function findMatching(drivers, string){
  drivers.filter(function(drivers){return string === drivers.string})
}
