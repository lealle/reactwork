function CallbackFun() {
    // 콜백함수 : 매개변수에 전달하는 함수

    // forEach() : 배열을 콜백함수를 이용하여 반복 접근
    const numbers = [35,46,27,5,7];
    numbers.forEach((v, i) => console.log(`${i}번째 요소 : ${v}`))

    // map() : 콜백함수에서 리턴한 값들을 새로운 배열로 만드는 함수
    let arrMap = numbers.map((v, i) => v*i)
    console.log(arrMap);

    // filter() : 콜백함수의 리턴값이 true인 것들만 새로운 배열로 만드는 함수
    let num = [0,1,2,3,4,5]

    let oddNum = num.filter(v => v%2==1)
    console.log(`홀수 배열 : ${oddNum}`);
}
export default CallbackFun;