//import the fs xore module
var fs = require('fs');
// get the 3rd argument from process.argv which is the input file name
var file = process.argv[2];

//read file synchronously and convert it to a buffer
var readFile = fs.readFileSync(file);

// pass utf8 to readFileSync to bypass the need of toString()
var str = readFile.toString(); 
var splited = str.split('\n');
var newLines = splited.length - 1;

console.log(newLines);


