var fs = require('fs');
var path = require('path');

function filterFiles(dir, ext, callback) { 
    var filtered = [];

    fs.readdir( dir, function(error, data) {
        if(error) return callback(error);
    
        for( var i=0; i < data.length; i++ ) {
            var dirExt = path.extname( data[i] );
            
            if( dirExt == '.' + ext ) {
                filtered.push(data[i]);
            }
        }
        
        callback( null, filtered );
        
    });
}

module.exports =  filterFiles; //{filterFiles:filterFiles};


