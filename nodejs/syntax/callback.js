// js에서는 함수를 변수에 할당할 수 있기 때문에 '값'으로 쓰일 수 있음. 
// function(){} 와 같이 함수명 없이 선언된 함수는 익명함수라고 함. 
// 강의에서는 콜백함수에 대해 자세히 설명하기보다는 간단한 개념과 형식만 설명함.
// 콜백함수는 이름(나중에 호출하다)과 같이 나중에 함수를 호출하는 함수. 
// 특정 로직이 끝났을 떄 원하는 동작을 실행시킬 수 있다. 

var a = function(){
    console.log('A');
}
function slowFunc(callback){
    callback();
}
// parameter에 넣은 함수가 콜백되서 호출되는 것. 그래서 parameter에 함수를 꼭 넣어주어야 함.
slowFunc(a);
