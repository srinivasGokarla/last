function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    
console.log(arr,N)
var count = 0;
var count1 = 0;
var count2 = 0;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
        count++;
    } else if(arr[i] === 1) {
        count1++;
    } else if(arr[i] ===2) {
        count2++
    }
}
console.log(count, count1,count2)

}

if (process.env.USERNAME === "srini") {
  runProgram(`10
  0 1 0 1 1 1 0 2 2 0 `);
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
