var array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
var newArray = []

for (var i = 0; i < array.length; i++) {
    var numberString = array[i].toString()
    var firstDigit = numberString[0]

    if (firstDigit === '2' || firstDigit === '5') {
        newArray.push(array[i]);
    }
}

console.log(newArray);
