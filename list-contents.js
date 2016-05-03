var striptags = require('striptags');
var fs = require('fs');

var out = './out/';
var outStat = false;
try {
  fs.statSync(out);
  outStat = true;
} catch (ex) {}

if(!outStat) {
  fs.mkdirSync(out);
}

var files = fs.readdirSync('./files');


files.map(function(e) {
  var file = fs.readFileSync('./files/' + e, 'utf8');
  fs.writeFileSync(out + e, striptags(file));
})
