function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
   var arr = input[1].trim().split(" ").map(Number)
   //console.log(arr,N)
   console.log(heightOfTrees(N,arr))
}
   function heightOfTrees(N,arr) {
    var mat = new Array(10).fill(0);
     var max = [0]
   for(var i = 1; i < N; i++) {
  
     for(var j = 0; j < i; j++) {

    if(arr[i] > arr[j]) {

    }
    return mat[i]
}
   }

}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`9
      10 22 9 33 21 50 41 60 80`);
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