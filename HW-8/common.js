
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

console.log(barsik.dailyNorm(700));
console.log(barsik.feed());

console.log(barsik.dailyNorm(350));
console.log(barsik.feed());


barsik.feed().stroke();
barsik.stroke().stroke().feed().feed().feed();








