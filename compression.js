var crypto = require('crypto')
var fs = require('fs')
var zlib = require('zlib')

var password = new Buffer(process.env.PASS || 'password')
// console.log(password+" "+process.env.PASS)
/*var encryptStream = new crypto.createCipher('aes-256-cbc', password)

var gzip = zlib.createGzip()
var readStream = fs.createReadStream('./sample.txt')
var writeStream = fs.createWriteStream(__dirname + '/out.gz')

readStream   // reads current file
  .pipe(encryptStream) // encrypts
  .pipe(gzip)  // compresses
  .pipe(writeStream)  // writes to out file
  .on('finish', function () {  // all done
    console.log('done');
  });*/

var decryptStream = crypto.createDecipher('aes-256-cbc',password)
var gzip = zlib.createGunzip()
var readStream = fs.createReadStream(__dirname+ '/out.gz')

readStream
	.pipe(gzip)
	.pipe(decryptStream)
	.pipe(process.stdout)
	.on('finish',function(){
		console.log('done')
	})

