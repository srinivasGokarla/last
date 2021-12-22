function runProgram(input) {
    input = input.trim().split("\n")
    
    var str = input[0].trim().split("")
    console.log(str)
    var res = ""
    for(var i = 0; i < str.length; i++) {
        var sum = 0;
        for(var j = i; j < str.length; j++) {
            if(+str[j] % 2 == 0) {
              sum++;
            }
        }
        res = res + sum + " "
    }
       console.log(res)
  }

if (process.env.USERNAME === "srini") {
  runProgram(`574674546476`);
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
