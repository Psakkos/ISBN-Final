const factory= require('./BookFactory.js');
const random= require('./Random.js');
const adapter= require('./IsbnEanAdapter.js');

function client(){
      let list = [];
      let f = new BookFactory();
      for(let a=0;a<1000;a++ ){
            //make the pubYear
            let r = Random().discreteRangeIn(1990, 2017);
            if(r>=2007){
                return new EAN();
            }
            else{
                return new ISBN();
            }

            list[a] = list.unshift(factory.createBook(r));
      }

      //sorting

      //print
}
