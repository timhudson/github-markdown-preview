var fs = require('fs')
var marked = require('marked')
var hyperglue = require('hyperglue')
var inlineStyles = require('inline-styles')
var githubMarkdownCss = require('github-markdown-css')
var template = fs.readFileSync(__dirname + '/index.html').toString()

module.exports = function(markdown, callback) {
  // Accept a buffer or string
  markdown = markdown.toString ? markdown.toString() : markdown

  ensureCSS(function(err) {
    if (err) return callback(err)

    var body = marked(markdown)
    var html = template.replace('{{markdown}}', body)
    var inlinedHtml = inlineStyles(html, __dirname)
    callback(null, inlinedHtml.toString())
  })
}

function ensureCSS(callback) {
  var path = __dirname + '/github-markdown.css'
  
  try {
    fs.readFileSync(path)
    return callback()
  } catch(err) {}

  githubMarkdownCss(function(err, css) {
    if (err) return callback(err)

    fs.writeFileSync(path, css)
    callback()
  })
}
