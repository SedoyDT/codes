const http = require("http")
http.createServer(function(request,response){
    response.end("Hello NodeJs");
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000")
})
// На первой строке мы получаем модуль http, который необходим для создания сервера. 
//Это встроенный модуль, и для его загрузки необходимо применить функцию require():