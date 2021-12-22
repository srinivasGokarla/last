function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    //console.log(N,arr)
    console.log(lifeOfCTO(N,arr))
    
    }

    function lifeOfCTO(N,arr) {
        var result = -1;
        for(var i = 0; i < N; i++) {
            if(arr[i] > 0) {
             result = i;
                break ;
                
            }
        }
        return result
    }

    
    if (process.env.USERNAME === "srini") {
      runProgram(`5
      0 0 0 1 1`);
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
    