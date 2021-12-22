function runProgram(input) {
    input = input.trim().split("\n")
    var n = Number(input[0])
  //  console.log(n)
   console.log(fib(n)) 
     }
      
 function fib(n) {
    if (n <= 2){
        return n-1;
 }else{
    return fib(n-1) + fib(n-2);
}
}   
    if (process.env.USERNAME === 'srini') {
      runProgram(`5`);
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