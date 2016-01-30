////////////////////////////KISS///////////////////////////////////////


 var i,j,k,l; // incrementers 
  var pre = ['How to remove ','How to delete ', 'Remove ', 'Delete ']; // i
  var adj = ['','negative ','defamatory '];  // j
  var noun = ['picture ','pictures ','article ','post ','posting ','listing ','review ','information ']; // k
  var prep = ['on ','from ']; // m

var kW = function(site, column){
  var r =0; 
    for(i=0; i<pre.length; i++){ // prefix loop
        for(j=0; j<adj.length; j++){ // adj loop
            for(k=0; k<noun.length; k++){ // noun loop
                for(l=0; l<prep.length; l++){ // preposition loop
                  console.log(column+':'+ r + pre[i]+adj[j]+noun[k]+prep[l]+site); 
                  r++;
                } // close preposition loop
            } // close noun loop
        } // close adj loop
    } // close preposition loop
};
  kW('Blogspot',1); 


