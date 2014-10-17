# github-markdown-preview

Convert markdown to html with inlined styles using github-markdown-css

## Example

``` js
var fs = require('fs')
var convert = require('github-markdown-preview')

var md = fs.readFileSync('path/to/your.markdown').toString()

convert(md, function(err, html) {
  console.log(html)
})
```

## License

MIT
