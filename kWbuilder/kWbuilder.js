////////////////////////////KISS///////////////////////////////////////

  var i,j,k,l; // incrementers 
  var pre = ['How to ','Best way to ','Top ways to ']; // i
  var verb = ['repair ','fix ','help ', 'cure '];  // j
  var noun = ['knee pain ','knee inflamation ','knee soreness ','sore knees ','knee injury ']; // k
  var prep = ['','']; // m
  var resultArray = []; 

var kW = function(suffix, column){
  var r =2; // spreadsheet row to start on (initialize spreadsheet)
  resultArray[column] = [];  // initialize array of resulting keywords 
    for(i=0; i<pre.length; i++){ // prefix loop
        for(j=0; j<verb.length; j++){ // verb loop
            for(k=0; k<noun.length; k++){ // noun loop
                for(l=0; l<prep.length; l++){ // preposition loop
                  console.log(column+':'+ r + '  ' + pre[i]+verb[j]+noun[k]+prep[l]+suffix); 
                  // console.log here demonstrates an output with cell coords and the keyword
                  // the application that uses this code outputs results into google Sheets
                  // Alternatively, one can use JSON and multidiemtnsional arrays
                  resultArray[column].push(pre[i]+verb[j]+noun[k]+prep[l]+suffix);
                  r++; // move to the next row
                } // close preposition loop
            } // close noun loop
        } // close verb loop
    } // close preposition loop
    return resultArray[column]; // return the full array
};
  kW('fast',1); 