var userDate = Number(prompt('Дата'))
var userMonth = prompt('Месяц')
userMonth = userMonth.toLowerCase();
if (( userMonth === "Март" && userDate >= 21) || ( userMonth === "апрель" && userDate <= 19)){
    var userZodiac = 'Овен';
} else if (( userMonth === "апрель" && userDate >= 20) || ( userMonth === "май" && userDate <= 20)){
    var userZodiac = 'Телец';
} else if (( userMonth === "май" && userDate >= 21) || ( userMonth === "июнь" && userDate <= 20)){
    var userZodiac = 'Близнецы';
} else if (( userMonth === "июнь" && userDate >= 21) || ( userMonth === "июль" && userDate <= 22)){
    var userZodiac = 'Рак';
} else if (( userMonth === "июль" && userDate >= 23) || ( userMonth === "август" && userDate <= 22)){
    var userZodiac = 'Лев';
} else if (( userMonth === "август" && userDate >= 23) || ( userMonth === "сентябрь" && userDate <= 22)){
    var userZodiac = 'Дева';
} else if (( userMonth === "сентябрь" && userDate >= 23) || ( userMonth === "октябрь" && userDate <= 22)){
    var userZodiac = 'Весы';
} else if (( userMonth === "октябрь" && userDate >= 23) || ( userMonth === "ноябрь" && userDate <= 21)){
    var userZodiac = 'Скорпион';
} else if (( userMonth === "ноябрь" && userDate >= 22) || ( userMonth === "декабрь" && userDate <= 21)){
    var userZodiac = 'Стрелец';
} else if (( userMonth === "декабрь" && userDate >= 22) || ( userMonth === "январь" && userDate <= 19)){
    var userZodiac = 'Козерог';
} else if (( userMonth === "январь" && userDate >= 20) || ( userMonth === "февраль" && userDate <= 18)){
    var userZodiac = 'Водолей';
} else {
    var userZodiac = 'рыбы';
}

console.log("Ваш знак зодиака: " + userZodiac)