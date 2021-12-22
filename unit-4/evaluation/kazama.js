function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    var K = Number(input[2])
//console.log(arr,N,K)
console.log(Kazama(arr,K,N))
}
function Kazama(arr,K,N) {
 for(var i = 0; i < N; i++) {
 if(arr[i] === K) {
        return(i)
         
     } else {
         if(arr[i] > K) {
     return(i)
     
    }
}
 }
}

if (process.env.USERNAME === "srini") {
  runProgram(`4
  1 3 5 6
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
