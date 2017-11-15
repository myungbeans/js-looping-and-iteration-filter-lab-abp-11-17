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

function fuzzyMatch(drivers, initial){
  let fuzzyMatch = drivers.filter(function(driver){
    if (initial.charAt(0,1) === driver.charAt(0,1)){
      return true
    } else {
      return false
    }
  })
  return fuzzyMatch
}

function matchName(drivers, name){
  let matchName = drivers.filter(function(driver){
    if (driver[name] === this.[name]){
      return true
    } else {
      return false
    }
  })
  return matchName;
}
