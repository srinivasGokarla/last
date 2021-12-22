function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number)
var sum = 0
var arr1 = []
//console.log(N,arr)
for(var i = 0; i < N; i = i+2) {
    arr1.push(arr[i])
}
for(var j = 0; j < arr1.length; j++) {
    sum = sum + (arr[j+1] - arr[j])
}
console.log(sum)
}

if (process.env.USERNAME === "srini") {
  runProgram(`4
  10 30 40 20`);
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
