function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number).sort((a, b) => a - b)
      var sub = []
//console.log(arr,N)
for(var i = 0; i < arr.length; i++) {
  for(var j = 1; j < i+3; j++) {
    sub.push(arr[j] - arr[i]) 
  }
}
sub.sort((a,b) => b-a)
for(var k = 0; k <sub.length; k++) {
  var result = sub[0]
}
console.log(result)
}

if (process.env.USERNAME === "srini") {
  runProgram(`4
  5 10 6 8`);
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
