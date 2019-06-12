let currentDate = new Date();

module.exports.date=currentDate;//Объект module.exports - это то, что возвращает функция require() при получении модуля.

module.exports.getMessage=function(name){
    let hour = currentDate.getHours()
    if (hour > 16)
    return "Добрый вечер, " + name;
    else if(hour > 10)
    return "Добрый день," + name;
    else 
       return "Доброе утро, " + name;
}