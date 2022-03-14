var fs = require('fs');

// sample.txt에서 내용을 불러와서 출력하기
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');