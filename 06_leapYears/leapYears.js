const leapYears = function(year) {
   //Test century years
   if ((year % 100 === 0) && (year % 400 === 0)) {
      return true;
   }
   //Test non century years
   else if ((year % 100 !== 0) && (year % 4 === 0)) {
      return true;
   }
   else {
      return false;
   }
};

// Do not edit below this line
module.exports = leapYears;
