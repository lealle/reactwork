function ArrowFun() {
    const func1 = function(a, b) {
        return a+b;
    }
    console.log(`fun1 : ${func1(3,4)}`);

    const func2 = (a, b) => {
        return a+b;
    }
    console.log(`fun2 : ${func2(3,4)}`);

    const func3 = (a,b) => {return a+b}
    const func4 = (a,b) => a+b
    console.log(`fun4 : ${func4(3,4)}`);

    const func5 = function(num) {
        return function(value) {
            return num + value;
        }
    }

    let func5Num = func5(5);
    let result = func5Num(7)
    console.log(`func5Num : ${func5Num}`);
    console.log(`result : ${result}`);

    let result2 = func5(10)(5);
    console.log(`result2 : ${result2}`);

    const func6 = num => value => num+value;
    console.log(`func6 : ${func6(20)(30)}`);
}

export default ArrowFun;