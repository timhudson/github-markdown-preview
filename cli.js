#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var convert = require('./')
var chokidar = require('chokidar')
var argv = require('minimist')(process.argv.slice(2), {alias: {
  'w': 'watch',
  'o': 'output',
  'h': 'help'
}})

if (!argv._.length || argv.help) {
  var usage = '' +
    'Usage: github-markdown-preview <markdown-file> [options]\n\n' +
    'Options:\n\n' +
    '  -h, --help     output usage information\n' +
    '  -w, --watch    convert markdown when file changes\n' +
    '  -o, --output   optional file path for output. stdout is used by default.\n' +
    '                 required when using --watch.'
  return console.log(usage)
}

if (argv.watch && !argv.output) {
  return console.log('You must specify --output path when using --watch')
}

var markdownPath = path.resolve(argv._[0])

if (argv.watch) {
  chokidar
    .watch(markdownPath, {persistent: true})
    .on('change', generateHTML)
}

generateHTML()

function generateHTML() {
  var md = fs.readFileSync(markdownPath)
  convert(md, function(err, html) {
    if (err) throw err
    if (argv.o) return fs.writeFileSync(path.resolve(argv.o), html)
    console.log(html)
  })
}
