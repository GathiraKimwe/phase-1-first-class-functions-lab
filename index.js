// Code your solution in this file!
const returnFirstTwoDrivers = (arg) => {
    return arg.slice(0,2);
  }
  
  const returnLastTwoDrivers = (arg) => {
    return arg.slice(-2);
  }
  
  let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(arg) {
    return function fareMultiplier() {
      return arg * arg;
    }
  }
  
  const fareDoubler = (arg) => {
    return arg * 2;
  }
  
  const fareTripler = (arg) => {
    return arg * 3;
  }
  
  const selectDifferentDrivers = (arg1, arg2) => {
    return arg2(arg1);
  }