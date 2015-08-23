// must provide path to module
var myModule = require('./myModule');
var dir = process.argv[2];
var ext = process.argv[3];

function myCallback(error, fileList) {
    if(error) throw error;
    
    fileList.forEach(function(item){
        console.log(item);
    });
}

myModule(dir, ext, myCallback);