/*Задание 7:
Написать функцию, принимающую массив объектов вида:
  [
      {name: 'Vasya Pupkin', age: 25},
      {name: 'Ivan Petrov', age: 30},
      {name: 'Fedor Ivanov', age: 42}
  ]
и возвращающую объект вида:
  {
      Пользователи младше 40: [
          {name: 'Vasya Pupkin', age: 25},
          {name: 'Ivan Petrov', age: 30}
      ],
      Пользователь с именем Федор: {name: 'Fedor Ivanov', age: 42}
  }
Для свойства "Пользователь с именем Федор" осуществлять поиск объекта по имени, которое начинается с подстроки Fedor.

Задание 8:
Написать функцию, принимающую массив имен пользователей и возвращающую массив объектов вида:
  [
      {Пользователь 1: 'Вася'},
      {Пользователь 2: 'Петя'}
  ]

Задание 9:
Написать функцию, принимающую массив объектов и объединяющую их в один новый объект. Например:
  [
      {name: 'Vasya'},
      {name: 'Piotr', age: 25},
      {salary: '2000$'}
  ]
необходимо преобразовать в
  {
      name: 'Piotr',
      age: 25,
      salary: '2000$'
  }
Spread-оператор не использовать. Использовать перебирающий метод массивов. Старые объекты не должны преобразовываться.

Задание 10:
Переписать последнее задание с ООП на новый синтаксис. Проверить работоспособность всех методов.

Задание 11:
Написать функцию-промис, которая принимает в себя 2 числа и выводит в консоль целые числа, входящие в диапазон,
каждую секунду. После окончания работы интервала в консоль должно вывестись последнее запомненное число.*/

//Задание 7
{
    const arr = [
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ];

    function transformObj(arr) {
        const lessThenFourtyArr = arr.filter(value => value.age < 40),
            userFedor = arr.find(value => value.name.startsWith('Fedor'));
                return {
                'Пользователи младше 40' : lessThenFourtyArr,
                'Пользователь с именем Федор' : userFedor
         }
    };
        transformObj(arr);
}

//Задание 8
{
    const arr = ['Вася', 'Петя','Федор'];

    function transformArrObj(arr) {
        return arr.map((currentValue,i) => ({[`Пользователь ${++i}`] : currentValue}));
    }
    transformArrObj(arr);
}

//Задание 9
{
    const arr = [
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ];

    function joinInObj(arr) {
        return arr.reduce((result, value) => Object.assign(result,value), {});
    };
    joinInObj(arr);
}
//Задание 10
{
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }

        _formatFoodAmount() {
            return `${this._foodAmount} гр.`;
        }

        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }
    }

    class Cat extends Animal {
        stroke() {
            console.log('Гладим кота.');
            return this;
        }

        feed() {
            super.feed();

            console.log('Кот доволен ^_^');
            return this;
        }
    }

    let barsik = new Cat('Барсик');

    barsik.feed().stroke().stroke().feed();
}

//Задание 11
{
    function showRangeNumbers (x, y) {
        return new Promise((resolve, reject) => {
            if (x > y) [x, y] = [y, x];

            let value = Math.ceil(x);

            let timerId = setInterval(() => {
                if (value > y) {
                    value === Math.ceil(x) ? reject('В диапазоне нет целых чисел') : clearInterval(timerId);

                    resolve(value);
                } else {
                    console.log(value++);
                }
            }, 1000)
        })
    }

    showRangeNumbers(0.2, 4.8)
        .then(value => console.log(`Последнее запомненное значение ${value}`))
        .catch(error => console.log(error));

}