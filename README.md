# github-markdown-preview

Convert markdown to html with inlined styles using [generate-github-markdown-css](https://github.com/sindresorhus/generate-github-markdown-css)

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

outputs html of markdown with github styles to stdout

Options:

  -h, --help     output usage information
  -s, --server   watch file and server changes. This overrides -w and -o.
  -w, --watch    watch markdown file and convert on changes
  -p, --port     optional TCP port to start the server at, defaults to 9999
  -o, --output   optional file path for output. stdout is used by default.
                 required when using --watch.
```

### Live-reload

Watches markdown file and automatically updates preview in browser

``` sh
$ github-markdown-preview ./README.md -s
Preview now being served at http://localhost:9999
```

## License

MIT
