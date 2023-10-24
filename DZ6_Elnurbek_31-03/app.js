function multiplyBy(x) {
    return x * 2
}
const inputArray = [1, 2, 3, 4, 5]
const result = inputArray.map(multiplyBy)
console.log(result)

function square(x) {
    return x * x
}

const inputArray1 = [2, 3, 4, 5, 6]
const result1 = inputArray1.map(square)
console.log(result1)

function  subtractBy10(x) {
    return x - 10
}

const inputArray2 = [15, 20, 30, 40]
const result2 = inputArray2.map(subtractBy10)
console.log(result2)