var fs = require('fs');


/*
sync.js와의 차이점. sync.js에서는 readFile이 동기적으로 작동하는 함수였고, return값을 주기 때문에 var result
변수에 넣어주었음. 
하지만 async.js는 readFile이 비동기적으로 작동하고, return값을 주지 않는 대신에 함수의 세번째 인자로 함수가 들어가고
작업이 끝났을 떄 그 함수가 동작함. 
*/
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result){
    console.log(result);
});
console.log('C');