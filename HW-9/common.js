//Задание 1
function Animal (name) {

    this.name = name;
    
    this._foodAmount = 50;
}
  
    Animal.prototype._formatFoodAmount = function() {
        return this._foodAmount + ' гр.';
    }
    
    Animal.prototype.dailyNorm = function(amount){

        this._amount = amount;
    
        if (!arguments.length) { 
            return this._formatFoodAmount();
        }
    
        if ((this.amount < 50) || (this.amount > 500)) {
           return ('Некорректное количество корма');
        }
    
           this._foodAmount = this.amount;
        };
    
    Animal.prototype.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
        };
    
    
    
    function Cat(name) {
    Animal.apply(this, arguments);
    }

   Cat.prototype = Object.create(Animal.prototype);
   Cat.prototype.constructor = Cat;
    
   Cat.prototype.feed = function() {
    
        Animal.prototype.feed.apply(this);
    
        console.log('Кот доволен ^_^');
    
        return this;
        }
    
    Cat.prototype.stroke = function() {
    
        console.log('Гладим кота');
    
        return this;
        }
    
    
    var barsik = new Cat ('Barsik');
    
    console.log(barsik.name);
    
    //barsik = null;
    
    
    console.log(barsik.dailyNorm());
    console.log(barsik.feed());
    
    console.log(barsik.dailyNorm(700));
    console.log(barsik.feed());
    
    console.log(barsik.dailyNorm(350));
    console.log(barsik.feed());
    
    
    barsik.feed().stroke();
    barsik.stroke().stroke().feed().feed().feed();


//Задание 2

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};


function deepClone(obj) {
    var clone;

  // Примитивы
    if (null == obj || 'object' != typeof obj) {
        return obj;
    }

  // Массивы
    if (obj instanceof Array) {
      clone = [];
      for (var i = 0, length = obj.length; i < length; i++) {
          clone[i] = deepClone(obj[i]);
      }
      return clone;
    }
  // Функции
    if (obj instanceof Function) {
      clone = function() {
        return obj.apply(this, arguments);
      }
      return clone;
    }
  // Объекты
    if (obj instanceof Object) {
        clone = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) clone[key] = deepClone(obj[key]);
        }
        return clone;
    }
  throw new Error('Невозможно скопировать объект, так как тип не поддерживается ');
  }

//проверка
var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


//Задание 3

function deepEqual(obj1, obj2) {
 //Объекты
    if (Object.keys(obj1).length === Object.keys(obj2).length) {

        for (var key in obj1) {
            if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
                var obj1Value = obj1[key],
                    obj2Value = obj2[key];

                if (typeof obj1Value === 'object' && obj1Value !== null) {

                    if (!deepEqual(obj1Value, obj2Value)) {
                        return 'Объекты не равны';
                    } 
    //Функции
                } else if (typeof obj1Value === 'function') {

                    if (obj1Value.toString() !== obj2Value.toString()) {
                        return 'Объекты не равны';
                    }

                } else if (obj1Value !== obj2Value) {
                    return 'Объекты не равны';
                } 

            } else {
                return 'Объекты не равны';
            }
        } 
        return 'Объекты равны';
    } 
    return 'Объекты не равны';
}


// проверка

var obj1 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{1: 4}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var obj2 = {
    string: 'Vasya',
    number: 35,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Bye');
    }
};

console.log(deepEqual(obj1, obj2));

var obj1 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{1: 4}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var obj2 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

console.log(deepEqual(obj1, obj2));





