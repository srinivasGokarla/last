function runProgram(input) {
    input = input.trim().split("/n")
    var N = Number(input[0])
    //console.log(N)
    console.log(differenceSum(N))
    }
    function differenceSum(N) {
      var mat = new Array(10).fill(0);
      mat[0] = mat[1] = mat[2] = 1;
      mat[3] = 2;
      for(var i = 4; i <= N; i++) {
          mat[i] = mat[i-1] + mat[i-3] + mat[i-4]
      }
      return mat[N]
      
    }
    
    if (process.env.USERNAME === "srini") {
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