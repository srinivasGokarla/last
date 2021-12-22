function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var[L,R] = input[1].trim().split(" ").map(Number)
//console.log(N,L,R)
var arr = [];
for(var i = 0; i < N; i++) {
    
}
arr.push(i)
//console.log(arr.join(" "))
Plagiarism(arr,N,0)

var str = "";
for(var j = 0; j < arr1.length; j++) {
    console.log(arr1[j].toString().split(" ").join(" ")) 
}


}
  var arr1 = []
function Plagiarism(arr,N,cur) {
    if(cur = N) {
       arr1.push(+arr.join(" "))
       return
    }
    for(var i = 0; i < N; i++) {
     swap(arr, i, cur)
     Plagiarism(arr,N,cur+1)
     swap(arr,i,cur)
    }
}

function swap(arr,f,s) {
    temp = arr[f]
    arr[f] = arr[s]
    arr[s]  = temp
}

if (process.env.USERNAME === "srini") {
  runProgram(`3
  0 1`);
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
