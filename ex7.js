var http = require('http');
var URL = process.argv[2];

http.get(URL, function(response){
    response.setEncoding('utf8');

    response.on('error', function(error){
        console.error(error);
    });

    response.on('data', function(data) { 
        console.log(data);
    });
});
