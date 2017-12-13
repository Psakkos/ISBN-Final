const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

const BookFactory = function (){

    function createBook(pubYear){
        if(pubYear<2007){
            return new ISBN();
        }
        else{
            return new EAN();
        }
    }

    return {createBook};
}

      let year= Random.discreteRangeIn(1990, 2017);
      return year;
      function createBook(year){};
module.exports = BookFactory;
