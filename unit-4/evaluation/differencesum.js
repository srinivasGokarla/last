function runProgram(input) {
input = input.trim().split("/n")
var N = Number(input[0])
//console.log(N)
console.log(differenceSum(N))
}
function differenceSum(N) {
    if(N < 0) {
        return 0
    } else if(N == 0) {
        return 1;
    } else {
      return  differenceSum(N-1) +  differenceSum(N-3) +  differenceSum(N-4)
    }
}

if (process.env.USERNAME === "srini") {
  runProgram(`5`);
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
