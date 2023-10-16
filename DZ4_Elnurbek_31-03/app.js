//part-1
var inf = ["name", "John", "lastname", "Black", "age", "23"]
var obj = {}
for (var i = 0; i < inf.length; i += 2) {
    var key = inf[i]
    var value = inf[i + 1]
    obj[key] = value
}
console.log(obj)


//part-2
function  calculate() {
    var sum = 0
    var count = arguments.length

    for(var i = 0; i < count; i++) {
        sum += arguments[i]
    }
     if (count > 0) {
         var average = sum / count
         return average
     }else{
         return 0
     }
}

var result = calculate(101, 85, 785, 56, 80)
console.log('Среднее арифметическое:' + result)

//part-3
function getCoffee() {
    var drinkName = prompt('Что вы хотите выпить (кофе)?').toLowerCase()
    if(drinkName === 'coffee'){
        var variant = prompt('Какой кофе вы желаете?(черный/с молоком)').toLowerCase()
        switch (variant) {
            case 'black coffee':
                alert('Вы выбрали черный кофе, ожидайте заказ')
                break
            case 'with milk':
                alert('Вы выбрали кофе с молоком, ожидайте заказ')
                break
            default:
                alert('Извините, у нас есть только два вида кофе')
        }
    }else{
        alert('Извините, у нас есть только кофе')
    }
}
getCoffee()
function getDataType(value) {
    var dataType = typeof value
    console.log(dataType)
}

getDataType(false)
getDataType('hello world!')
getDataType(42)











