 function runProgram(input) {
    input = input.trim().split("\n")
    var T = Number(input[0])
    var stu = input[1].trim().split(" ").map(Number)
    var room = input[2].trim().split(" ").map(Number)
    var arr = []
   // console.log(T,stu,room)
    for(var i = 0; i < stu.length; i++) {
      
            arr.push(Math.abs(stu[i]- room[i]))
        
       
    } 
    arr.sort((a,b) => a-b)

    for(var i = 0; i < arr.length; i++) {

    }
    console.log(arr[arr.length-1])
     }
    
    if (process.env.USERNAME === 'srini') {
      runProgram(`3
      4 -4 2
      4 0 5`);
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