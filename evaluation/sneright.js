function runProgram(input) {
   input = input.trim().split("\n")
   var N = Number(input[0])
   var arr = input[1].trim().split(" ").map(Number)
  // console.log(arr,N)
   var arr1 = []
   for(var i = 0; i < arr.length; i++) {
       var count = N -i;
       for(var j = i+1; j < arr.length; j++) {
           if(arr[i] > arr[j]) {
               count --;
               break;
           }
       }
       if(count == N-i) {
           arr1.push(arr[i])
       }
      
   }
   console.log(arr1.length)
    
}

if (process.env.USERNAME === "USER") {
  runProgram(`5
  4 2 1 3 7`);
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
