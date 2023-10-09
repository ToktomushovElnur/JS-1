var userName = prompt('имя')
var userSurname = prompt('фамилия')
var userAge = prompt('возраст')
var age1 = 18
var age2 = 60
var age3  = 80
if (userAge < age1) {
    alert('Привет, ' + userName);
} else if (userAge >= age1 && userAge < age2) {
    alert('Здравствуйте, ' + userSurname + ' ' + userName);
} else if (userAge >= age2 && userAge < age3) {
    alert('Добро пожаловать, ' + userSurname + ' ' + userName);
} else {
    alert('Произошла ошибка');
}






