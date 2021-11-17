function runProgram(input) {
 input = input.trim().split("\n")
 var N = Number(input[0])
 for(var i = 0; i < N; i++) {
    var W = Number(input[i])
    function ways(W) {
        if(W == 0) {
            return 1;

        }
        if(W < 0) {
            return 0;
        }
        return ways(W-1) + ways(W-2) + ways(W - 5)
    }
    console.log(ways(W))
    
 }
 
}

if (process.env.USERNAME === "USER") {
  runProgram(`1
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
