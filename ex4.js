var fs = require('fs');
var file = process.argv[2];
var numLines = 0;

var contents = fs.readFile(file, 'utf8', function(error, data){
    // console.log(result);
    if( error ) throw error;
    var newLines = data.split('\n');
    // add num of new lines to numLines
    numLines = newLines.length - 1;
    // print num of new lines
    console.log(numLines);    
});

