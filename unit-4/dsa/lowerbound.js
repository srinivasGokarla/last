function runProgram(input) {
    input = input.trim().split("\n");
    var [N, K] = input[0].trim().split(' ').map(Number);
    var arr = input[1].trim().split(' ').map(Number);
    Lowerboundinlogn(N, K, arr);
}
function Lowerboundinlogn(N, K, arr){
    var lo = 0;
    var hi = N - 1;
    var mid = Math.floor(lo + (hi - lo) / 2);
    var result = [];
    if (arr[mid] < K) {
        lo = mid;
    } else if (arr[mid] > K) {
        hi = mid;
    } else if (arr[mid] === K) {
        result.push(mid);
    }

    for (var i = lo; i <= hi; i++) {
        if (arr[i] === K) {
            result.push(i);
        }
    }
    if(result.length === 0){
        console.log(-1);
    } else {
        if(result[1] < result[0]){
            console.log(result[1]);
        } else {
            console.log(result[0]);
        }
    }
}

if (process.env.USERNAME === "srini") {
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