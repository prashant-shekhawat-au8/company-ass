function correction(input){
    const Array = input.split(' ');
    let result = '';
    Array.map((str, i) => {
        if(i==Array.length-1){
            if(str[str.length-1]!=="."){
                Array[i]=Array[i]+"."
            }
        }
        if(str[str.length-1]==="."){
          Array[i+1]=Array[i+1].charAt(0).toUpperCase() + Array[i+1].slice(1)
        }
        if (str[0] === str[0].toUpperCase()){
            if(i!=0){
                if( Array[i-1][(Array[i-1].length)-1]!=="."){
                    Array[i-1] = Array[i-1] + ".";
                }
               
            }
        } 
        
    result = Array.join(' ');
    });
  return result;


  }

 console.log(correction("John have an apple The sky is blue. they get a coin"))
