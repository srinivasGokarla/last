function runProgram(input) {
input = input.trim().split("\n")
var[N,K] = input[0].trim().split(" ").map(Number)
var arr = input[1].trim().split(" ").map(Number)
lowerBound(arr,K,N)
}
function lowerBound(arr,K,N) {
   var lo = 0;
   var hi = N-1;
    ans = -1;
    while(lo <= hi) {
        mid = Math.floor(lo + (hi - lo)) / 2;
        if(arr[mid] == K) {
            ans = mid;
            hi = mid -1;

        } else if(arr[mid] > K) {
          hi = mid - 1;

        } else {
         lo = mid + 1;
         
        }
        
     
    }
    console.log(ans)
}

if (process.env.USERNAME === "HP") {
  runProgram(`5 2
  1 1 2 2 5`);
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
