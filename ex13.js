var http = require('http'),
    url = require('url'),
    port = process.argv[2];
    
var server = http.createServer(function(req, res) {
    
    var parsedURL = url.parse(req.url, true);
    
    if( req.method != 'GET' ) {
        return res.end();
    }
    
    var iso = parsedURL.query.iso;
    var date = new Date(iso);
    
    var endpoints = {
        time: {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        },
        unixtime: {
            "unixtime": date.getTime()
        }
    };
    
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    if( parsedURL.pathname == '/api/parsetime' ) {
        res.write(JSON.stringify(endpoints.time));
        res.end();        
    }
    
    if( parsedURL.pathname == '/api/unixtime' ) {
        res.write(JSON.stringify(endpoints.unixtime));
        res.end(); 
    }
    
    
});

server.listen(port);