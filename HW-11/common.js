//Задание 1 (исправленнный)
function createObjectsArr(arr) {
    function changeArrEl(value) {
        return {name: value};
    }
    return arr.map(changeArrEl);
}
console.log( createObjectsArr(['Vasya', 'Petya', 'Vanya']) );

//Задание 2
function createCurrentTime(arr) {
    function addElement(prev,el) {
        return prev +' : ' + el;
    }
    return arr.reduce(addElement, 'Текущее время');
}
 alert( createCurrentTime(['00', '13', '24']) );

//Задание 3
function sumVowels(s) {
    var sArr = s.toLowerCase().split(''),
        sum = 0,
        vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'э', 'ы', 'у', 'ю', 'я'];

    for (var i = 0; i < sArr.length; i++) {

        if (vowelsArr.some(function(val) {
            return val === sArr[i];
        })) {
            sum++;
        }
    }
    return sum;
}
sumVowels('Привет, менЯ зовут Vasya!');

//Задание 4 (исправленный)
function transformText(text) {
    var textSeparation = text.split(/[.?!]/);
   //textSeparation.pop();
   if (!(textSeparation[textSeparation.length-1].length)) {
    textSeparation.pop();
    }
    function determineLength(arr) {
        var arrLength = arr.split(/[, ]/).join('').length;
        return arr.trim() + ' - ' + arrLength + ' букв';
    }
    return textSeparation.map(determineLength).join('\n');
  }
  console.log( transformText('Добрый день! Меня, кстати, зовут Вася. Давайте познакомимся? Я хороший парень') );



