var net = require('net');
var port = process.argv[2];

function addZero( number ) {
    if(number < 10) {
        number = '0' + number;
    }
    
    return number;
}

var server = net.createServer( function(socket) {
    
    var date = new Date(),
        year = date.getFullYear(),
        month = addZero( date.getMonth() + 1 ),
        day = addZero( date.getDate() ),
        hour = addZero( date.getHours() ),
        minutes = addZero( date.getMinutes() );
    
    var fullDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n';
    
    // return?
    socket.end(fullDate);
    
});

// init server
server.listen(port);


