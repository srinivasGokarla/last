function runProgram(input) {
   input = input.split("\n");
  var K = Number(input[0]);
  var arri = input[1].split(" ").map(Number);
  var depa = input[2].split(" ").map(Number);
  var count = 0
  for(var i = 0; i < arri.length; i++){
      for(var j = i; j <= i; j++) {
          if(depa[j] > arri[i+1]) {
              count++;
          }
      }
  }
  if(count+1 <= K){
      console.log("Possible");
  } else {
      console.log("Not Possible");
  }

}

if (process.env.USERNAME === "srini") {
  runProgram(`1
  1 3 5
  2 6 8`);
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
