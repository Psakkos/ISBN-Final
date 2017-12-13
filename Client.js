const factory= require('./BookFactory.js');
const random= require('./Random.js');
const adapter= require('./IsbnEanAdapter.js');

function client(){
      let list = [];
      let f = new BookFactory();
      for(let a=0;a<1000;a++ ){
            //make the pubYear
            list[a] = f.createBook();
      }

      //sorting

      //print
}
