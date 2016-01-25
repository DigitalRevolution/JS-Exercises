// Objective: Create a data model to map characters with ascii key values
// then create a simple way to look up the ASCII character value from a CLI

// create the object and declare variables
var asciObj = {}, i, j;

// add arrays of characters to look up
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numberCaseArray = ['1','2', '3', '4', '5', '6', '7', '8', '9', '0'],  
    symbolCaseArray = ['\\','!','@','#','$','%','^','&','*','(',')','-','_','+','=','?','/','<','>',',','.',';',':','{','}','[',']','|','`','~'];

// programatically create extensible function to build the object 
var maker = function(args) {
    for (i=0; i<args.length; i++) {        
        for (j=0; j <args[i].length; j++) {
            var x = args[i][j];
            asciObj[x] = x.charCodeAt(0);
        }
    }
};
// call extensible function with arrays above
maker([lowerCaseArray, upperCaseArray, numberCaseArray, symbolCaseArray]);

// create simple CLI Ascii lookup function with basic error handling
// to search through asciObj created above -- this could be acheived
// with .charCodeAt() method, but this way demonstrates Model/Controler interaction. 

var retreive = function(inquiry){
    if (typeof(inquiry) === 'string' && inquiry.length === 1) {
        return asciObj[inquiry];
    } else {
        throw new TypeError('Please enter a single character as a string.');
    }
};

// expample CLI function call 
retreive('a'); 