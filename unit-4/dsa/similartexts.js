function runProgram(input) {
    input = input.trim().split("\n")
   
    var str = input[0].split("")
    var str1 = input[1].split("")
    var arr = [];
  //  console.log(str,str1)
    for(var i = 0; i < str.length; i++) {
       
      for(var j = 0; j < str1.length; j++) {

    if(str[i] === str1[j]) {
       arr.push(str[i])
        
    }  
       
}


}   
for(var i = 0; i < arr.length; i++) {
   
}
    
    
     }
    
    if (process.env.USERNAME === 'srini') {
      runProgram(`AEDFHR
      ABCDGH`);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }