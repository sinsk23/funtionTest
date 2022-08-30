
//1. 프로토타입 연습
function 스킬(){
    this.q = 'q스킬';
    this.w = 'w스킬';
}

스킬.prototype.name = 'ZED'
let nunu = new 스킬()

console.log(스킬);//[Function: 스킬]
console.log(스킬.prototype);//{ name: 'ZED' }

console.log(nunu.name);//ZED

console.log(nunu.q);//q스킬

let array = [4,2,1];//사람 == 컴퓨터 let array = new array(4,2,1)

console.log(array.sort());//[ 1, 2, 4 ]

//2. 콜백함수 연습
//ex) 1)
// document.querySelector('.button').addEventListener('click',함수명)
// document.querySelector('.button').addEventListener('click',function(){
// })

//함수에 파라미터로 들어가는 함수 , 즉 함수안의 함수
//용도 : 순차적으로 실행하고 싶을 때
//ex)2)
setTimeout(function 함수이름정의가능 (){


}, 1000)

setTimeout(function(){


}, 1000)//1초경과후


//ex)3)
function first(파라미터){
    파라미터()
}

function second(){

}

//first(function(){})
first(second)// 실행시 위 first 파라미터 자리에 second가 들어감


//ex)4)

function first(임의파라미터값){
    console.log(1)
    임의파라미터값()
}

function second(){
    console.log(2)
}

first(second)//1,2  // == first() second()
