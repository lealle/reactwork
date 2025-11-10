function Assign() {
    /*
    (구조)분해 할당
    - 배열 분해 할당
    - 객체 분해 할당
    */

    // 1. 배열 분해 할당
    // ES5
    const points = [10, 20, 30];
    const x1 = points[0];
    const y1 = points[1];
    const z1 = points[2];
    console.log(`x1 = ${x1}, y1 = ${y1}, z1 = ${z1}`);

    // EX6
    const [x2, y2, z2] = points;
    console.log(`x2 = ${x2}, y2 = ${y2}, z2 = ${z2}`);

    // 두번째 값 무시
    const [x3, ,z3] = points;
    console.log(`x3 = ${x3}, z3 = ${z3}`);

    // 첫번째 값만 넣기(컴마가 없어도 되고 여러개 여도 됨)
    const [x4] = points;
    console.log(`x4 = ${x4}`);

    // 배열보다 더 많은 변수가 있을 때
    const [x5, , ,n5] = points;
    console.log(`x5 = ${x5}, n5 = ${n5}`);

    // 2. 객체 분해 할당
    const car = {
        model : 'k7',
        color : 'black',
        year : 2025
    }

    // ES5 분해 할당
    const model2 = car.model;
    const color2 = car.color;
    const year2 = car.year;

    // ES6 분해 할당
    // const {model, color, year} = car;
    // console.log(`model = ${model}, color = ${color}, year = ${year}`);

    const {model:m3, year:ye3, color:c3} = car;
    console.log(`model = ${m3}, color = ${c3}, year = ${ye3}`);

    const {model, year} = car;
    console.log(`model = ${model}, year = ${year}`);
                        
    const funct1 = ({model, year}) => console.log(`funct1 : model = ${model}, year = ${year}`);
    funct1(car)
}
export default Assign;