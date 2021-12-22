function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
    var [a,b,c,k] = input[line++].split(" ").map(Number)
   
    console.log(optimiseTheCurve(a,b,c,k))
    
      }
   }

      function optimiseTheCurve(a,b,c,k) {
          var lo = 0;
          var hi = k-c;
          var output = 1000
          while(lo <= hi) {
              
            var  mid = (lo + Math.floor((hi-lo) / 2));
            var value = ((a*(mid)**2)+(b*(mid))+c);
              if(value > k) {
                  output = Math.min(output,mid)
                  hi = mid-1;
              }
              else if( k > value) {
                  lo = mid+1;
              }
          }
   
          if(output !== 1000) {
              return output;
            }
          return -1;
      }
      
if (process.env.USERNAME === "srini") {
    runProgram(`1
    3 2 4 15`);
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