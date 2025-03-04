// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function to return the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array containing both driver selection functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function to create a fare multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Function to double the fare
  function fareDoubler(fare) {
    return fare * 2;
  }
  
  // Function to triple the fare
  function fareTripler(fare) {
    return fare * 3;
  }
  
  // Function to select different drivers based on the passed function
  function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }