const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

function IsbnEanAdapter(isbnOBJ){
    let temp= isbnOBJ.code;
    let code= "978" + temp;
    let checkDigit = check();

    function check(){
        let sum = 0;
        for(let c=0;c<12;c++){
            if(c%2 ==0){
                sum += 1*code[c];
            }
            else{
                sum += 3*code[c];
            }
        }
        console.log("the sum is ="+sum);
        let remainder = sum %10;
        if(remainder == 0){
            return 0;
        }
        return 10-remainder;
    }

    function read(){
        return code + "-" + checkDigit;
    }

    return {code,checkDigit,read}

}
