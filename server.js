var http = require("http");

var PORT = 7000;


function handleRequest(request,response) {
    response.end("You are amazing and beautiful! " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server is now listening on http://localhost:" + PORT);
})

///////////////////////////////////////////////////////////////////////


var PORT2 = 7500;


function handleSecondRequest(request,response) {
    response.end("This world is going to shit! " + request.url);
}

var secondServer = http.createServer(handleSecondRequest);

secondServer.listen(PORT2, function () {
    console.log("Server is now listening on http://localhost:" + PORT2);
})