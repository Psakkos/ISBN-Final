const Random = require('./Random.js');

const EAN = function(){

    let sysCode;//3 digits
    let manCode;//5 digits
    let proCode;//4 digits
    let checkDigit = check();


    function makeSysCode(){
        let r = Random().discreteRangeIn(1,8);
            if (r==1){

            }
            if (r==2){

            }
            if (r==3){

            }
            if (r==4){

            }
            if (r==5){

            }
            if (r==6){

            }
            if (r==7){

            }
            if (r==8){

            }
    }
    function makeManCode(){
        return Random.digit(5);
    }
    function makeProCode(){
        return Random.digit(4);
    }

    function check(){
        let code = sysCode+manCode+proCode;
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
        return code+"-"+checkDigit;

    }
    return {sysCode,manCode,proCode,checkDigit,read};
};

function test(){
    let e = new EAN();
    console.log(e.checkDigit);

}
//test();
module.exports = EAN;
