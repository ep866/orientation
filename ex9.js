var http = require('http'),
    URLS = [],
    count = 0,
    allData = [];


function getURLS( args ) {
    // skip first two indexes
    var i = 2;
    
    while( i < args.length ) {
        URLS.push( args[i] );
        i++;
    }
    
}

function getALL() {
    
    getURLS( process.argv );
    
    for( var i = 0; i < URLS.length; i++ ) {
        getURL( URLS[i] );
    }    
}

function getURL( url ) {
    
    var result = "";
    
    http.get(url, function(response) {
        response.setEncoding('utf8');
        
        response.on('error', function(error) {
            console.error(error);
        });
        
        response.on('data', function(data) {
            result += data;
        });
        
        response.on('end', function() {
            // get index of the current url passed to fn
            var index = URLS.indexOf(url);
            
            count += 1;
            
            // preserve index
            allData[index] = result;
            
            if( count == 3 ) {
                
                allData.forEach(function(d,i) {
                    console.log( allData[i] );
                });
                
            }  
    
        });
    });
    
}


// print out the urls
getALL();





