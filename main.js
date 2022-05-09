var one = +prompt('Введите первое чесло')
var two = +prompt('Введите второе число')
var three = +prompt('Введите третье число')

if((one > two && one < two) || (one < two && one > three)){
    alert('Среднее число: ' + one);
}else if((two > one && two < three ) || (two < one && two > three)){
    alert('Среднее число: ' + two);
}else if((three > one && three < two ) || (three > two && three < one)){
    alert('Среднее число : ' + three);
}else{
    alert('Упс что-то пошло не так')
}