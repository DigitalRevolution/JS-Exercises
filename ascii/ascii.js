// Objective: Programatically create an organized object to map 
// keyboard charaters with ASCII values. 
var asciObj = {
        upper: {}, 
        lower: {}, 
        number: {},
        symbol: {}
        },i; 

var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numberCaseArray = ['1','2', '3', '4', '5', '6', '7', '8', '9', '0'],  
    symbolCaseArray = ['\\','!','@','#','$','%','^','&','*','(',')','-','_','+','=','?','/','<','>',',','.',';',':','{','}','[',']','|','`','~'];

var maker = function(args, name) {
    for (i=0; i<args.length; i++) {
        var x = args[i];
        asciObj[name][x] = x.charCodeAt(0);
    }
};

maker(lowerCaseArray, 'lower');
maker(upperCaseArray, 'upper');
maker(numberCaseArray, 'number');
maker(symbolCaseArray, 'symbol');