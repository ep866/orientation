var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir( dir, function(error, data) {
    
    if(error) throw error;

    for( var i=0; i < data.length; i++ ) {
        var dirExt = path.extname( data[i] );
        if( dirExt == '.' + extension ) {
            console.log(data[i]);
        }
    }
    
});