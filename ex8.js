// V1. Collect & Append the data coming from a response event

    var http = require('http');
    var URL = process.argv[2];
    var result = "";
    
    http.get(URL, function(response) {
        response.setEncoding('utf8');
        
        response.on('error', function(error) {
            console.error(error);
        });
        
        response.on('data', function(data) {
            result += data;
        });
        
        response.on('end', function() {
            console.log(result.length);
            console.log(result);
        });
    });

// V2. Solution with npm bl package

    var http = require('http');
    var bl = require('bl');
    var URL = process.argv[2];
    
    http.get(URL, function(response) { 
        response.setEncoding('utf8');
        
        response.pipe(bl(function(err, data) { 
            if(err) return console.error(err);
            
            data = data.toString();
            
            console.log(data.length);
            console.log(data);
        }));
        
    });





