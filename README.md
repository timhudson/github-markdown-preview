# github-markdown-preview

Convert markdown to html with inlined styles using [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

## Programmatic usage

``` js
var fs = require('fs')
var convert = require('github-markdown-preview')

var md = fs.readFileSync('path/to/your.markdown')

convert(md, function(err, html) {
  console.log(html)
})
```

## CLI

``` sh
$ npm install --global github-markdown-preview
```

``` sh
$ github-markdown-preview --help
Usage: github-markdown-preview <markdown-file> [options]

Options:

  -h, --help     output usage information
  -w, --watch    convert markdown when file changes
  -o, --output   optional file path for output. stdout is used by default.
                 required when using --watch.
```

``` sh
$ open /tmp/readme.html & github-markdown-preview ./README.md -w -o /tmp/readme.html
```

## License

MIT
