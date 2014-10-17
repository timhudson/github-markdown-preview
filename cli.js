#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var convert = require('./')

var md = fs.readFileSync(path.resolve(process.argv[2]))

convert(md, function(err, html) {
  if (err) throw err
  console.log(html)
})
