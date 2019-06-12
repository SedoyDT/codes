// Кроме определения простейших функций или свойств в модуле 
// могут определяться сложные объекты или функции конструкторов, которые затем
//  используются для создания объектов. Так, добавим в папку проекта новый файл user.js:

function User(name,age){

    this.name=name;
    this.age=age;
    this.displayInfo = function(){
        console.log(`Имя: ${this.name} Возраст: ${this.age}`);
    }
}
User.prototype.sayHi=function(){
    console.log(`Привет, меня зовут ${this.name}`);
}
module.exports = User;