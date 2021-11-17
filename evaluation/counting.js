function runProgram(input) {
 input = input.trim().split("\n");
 let test = +input[0];
 let line = 1;
 for(let i =0;i<test;i++){
   let size = +input[line++]
   let arr = input[line++].trim().split("").map(Number)
   let count_0 = 0;
   let count_1 = 0;
   let count_2 = 0;
   let count_3 = 0;
   let count_4 = 0;
   let count_5 = 0;
   let count_6 = 0;
   let count_7 = 0;
   let count_8 = 0;
   let count_9 = 0;
   let res = [];
   for(a=0;a<arr.length;a++){
       if(arr[a]== 0){
           count_0++;
       }else if(arr[a]== 1){
           count_1++;
       }else if(arr[a]== 2){
        count_2++;

       }else if(arr[a]== 3){
        count_3++;
        }else if(arr[a]== 4){
      count_4++;
      }else if(arr[a]== 5){
        count_5++;
        }else if(arr[a]== 6){
            count_6++;
            }else if(arr[a]== 7){
                count_7++;
                }else if(arr[a]== 8){
                    count_8++;
                    }else if(arr[a]== 9){
                        count_9++;
                        }
}
res.push(count_0)
res.push(count_1)
res.push(count_2)
res.push(count_3)
res.push(count_4)
res.push(count_5)
res.push(count_6)
res.push(count_7)
res.push(count_8)
res.push(count_9)



console.log(res.join(" "))
 }
}

if (process.env.USERNAME === 'USER') {
  runProgram(`2
  5
  21321
  6
  235452`);
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