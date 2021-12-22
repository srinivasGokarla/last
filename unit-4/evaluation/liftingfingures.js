function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var line = 1;
for(var i = 0; i < N; i++) {
    var str = input[line++].trim().split("")
  //  console.log(str,N)
  console.log(liftingFingures(str,N))
}

}
function liftingFingures(str,N) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] != str[i+1]){
            count++
        }
    }
    return count
}

if (process.env.USERNAME === "srini") {
  runProgram(`2
  aaaaa
  abbbaaz`);
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
