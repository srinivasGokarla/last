function runProgram(input) {
input = input.trim().split("\n")
var test = Number(input[0])
var line = 1;
for(var i = 0; i < test; i++) {
    var N = Number(input[line++])
    
//console.log(N, test)

console.log(square(N))
}


}
function square(N) {
    var lo = 0, hi = N;
    while(lo <= hi) {
         var mid = Math.floor((lo + hi) / 2);
         if(mid * mid > N) hi = mid - 1;
         else lo = mid + 1;
    }
    return hi;
}

if (process.env.USERNAME === "srini") {
  runProgram(`2
  4
  8`);
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
