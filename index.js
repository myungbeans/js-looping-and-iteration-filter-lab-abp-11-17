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
  let matchingDrivers = drivers.filter(function(driver){
    if (string.toLowerCase() === driver.toLowerCase()){
      return true
    } else {
      return false
    }
  })
  return matchingDrivers;
  }

function fuzzymatch(drivers, initial){
  let fuzzyMatch = drivers.filter(function(driver){
    if (initial.slice(0,2) === driver.slice(0,2)){
      return true
    } else {
      return false
    }
  })
  return fuzzyMatch
}
