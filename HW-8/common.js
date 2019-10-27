/*Практическое задание 1:
Создать класс Cat. Добавить ему свойство - name, которое будем получать при создании объекта класса, и пока пустой
метод feed. Создать объект класса Cat, вывести в консоль его имя и затем удалить объект.
(Разобрать правила форматирования).

Добавить в класс Cat приватное свойство foodAmount, равное 50, и приватный метод formatFoodAmount, который
    будет возвращать это свойство + слово 'гр.'. В методе feed необходимо выводить в консоль информацию вида:
      "Насыпаем в миску (количество гр.) корма."
    "Количество гр." получаем с помощью метода formatFoodAmount.
    Вывести в консоль результат выполнения метода feed.

Написать единый геттер-сеттер dailyNorm для установки/получения количества корма (foodAmount).
    Оно не должно быть меньше 50 и больше 500 грамм. В случае некорректного количества возвращать сообщение об ошибке.
    Если функция вызывается как геттер - она должна возвращать уже отформатированное значение foodAmount.
    Протестировать метод dailyNorm с разными значениями параметра и без него. Метод feed должен оперировать актуальной
    информацией (использовать внутри метода вызов геттера).
    
    Практическое задание 4:
    Создать класс Animal. Перенести в него все свойства и методы. Отнаследоваться внутри Cat от Animal.
    Расширить метод feed для кошек. Теперь он должен выводить в консоль информацию вида:
      "Насыпаем в миску (количество гр.) корма.
      Кот доволен ^_^"
    Использовать вызов родительского метода вида animalFeed() и сохранение контекста this через переменную.
    Все вызовы, которые работали ранее, должны по-прежнему работать корректно.
    
     Практическое задание 5:
      Добавить публичный метод stroke, который будет выводить в консоль информацию "Гладим кота.".
      Доделать метод feed таким образом, чтобы можно было цепочкой вызывать его и метод stroke в любой
      последовательности и сколько угодно раз.
      (Лишние логи можно убрать, делать всё в том же задании).*/

function Animal (name) {

this.name = name;

this._foodAmount = 50;

var self = this;

this._formatFoodAmount = function() {
    return self._foodAmount + ' гр.';
}

this.dailyNorm = function(amount) {

    if (!arguments.length) { 
        return self._formatFoodAmount();
    }

    if ((amount < 50) || (amount > 500)) {
       return ('Некорректное количество корма');
    }

       self._foodAmount = amount;
    }

this.feed = function () {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    }

}

function Cat(name) {
Animal.apply(this, arguments);

var animalFeed = this.feed;

this.feed = function() {

    animalFeed();

    console.log('Кот доволен ^_^');

    return this;
    }

this.stroke = function() {

    console.log('Гладим кота');

    return this;
    }
}

var barsik = new Cat ('Barsik');

console.log(barsik.name);

//barsik = null;


console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());


barsik.feed().stroke();
barsik.stroke().stroke().feed().feed().feed();








