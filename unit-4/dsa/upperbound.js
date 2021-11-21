function runProgram(input) {
input = input.trim().split("\n")
var[N,K] = input[0].trim().split(" ").map(Number)
var arr = input[1].trim().split(" ").map(Number)
upperBound(N,K,arr)
}

function upperBound(N,K,arr){
    var lo = 1;
    var hi = N;
    while(lo < hi) {
        mid = Math.floor(lo + (hi - lo) / 2)
        if(arr[mid] <= K) {
            lo = mid + 1;

        } else {
            ans = mid;
            hi = mid -1;
        }
    }
    console.log(ans)
}

    

if (process.env.USERNAME === "HP") {
  runProgram(`10 3
  0 2 4 4 5 5 7 7 9 10`);
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
