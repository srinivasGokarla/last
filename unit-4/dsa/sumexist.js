function runProgram(input) {
    input = input.trim().split("\n")
   var N = Number(input[0])
   var arr = input[1].trim().split(" ").map(Number)
   var K = Number(input[2])
   var arr1 = []
   var sum = 0
  // console.log(N,arr,K)
  for(var i = 0; i < arr.length; i++) {
      for(var j = i; j < arr.length; j++) {
        arr1.push(arr[i]+ arr[j])
      }
      
  }
     
      for(var i= 0; i < arr1.length; i++) {
        if (arr1[i] == K) {
              console.log('yes')
          } else {
              console.log('no')
          }
        }
        
    }
    if (process.env.USERNAME === 'srini') {
      runProgram(`9
      1 2 3 4 5 6 7 8 9
      5`);
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