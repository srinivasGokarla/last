function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number)
var testcases = Number(input[2])
var line = 3;
var output = [];
for(var i = 0; i < testcases;i++) {
   
    var count = 0;
    var[L,R] = input[line++].trim().split(" ").map(Number)
    
   // console.log(N,arr,L,R, testcases)
   for(var j = 0; j < arr.length; j++) {
       if(arr[j] >= L && arr[j]  <= R) {
           count++;
       }
      
   }
   output.push(count)
  
}

console.log(output.join(" "))
   
}

if (process.env.USERNAME === "srini") {
  runProgram(`5
  10 1 10 3 4
  4
  1 10
  2 9
  3 4
  2 2
  `);
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
