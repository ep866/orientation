var http = require('http'),
    map = require('through2-map');
    
var port = process.argv[2];

var server = http.createServer( function(req, res) {
    
    if(req.method != 'POST') {
        return res.end();
    }
    
    req.pipe( map(function(chunk) {
        //data manipulation, follwed by repipe
       return chunk.toString().toUpperCase();
    })).pipe(res);
    
});

server.listen(port);