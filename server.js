const url = require('url');
const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
    'html' : 'text/html',
    'css' : 'text/css',
    'js'  : 'text/javascript',
    'png' : 'image/png',
    'jpeg' : 'image/jpeg',
    'jpg' : 'image/jpg'
}

http.createServer(function(req,res){
    var myUrl = url.parse(req.url).pathname;
    var fileName = path.join(process.cwd(),unescape(myUrl));
    console.log('file path is:'+ fileName);
    var loadFile;
    try{
    loadFile = fs.lstatSync(fileName);
    }
    catch(err){
        return console.log(err);
    }
}).listen(8080);