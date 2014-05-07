var m = require('module')
var cp = require('child_process')
var url = require('url')
var path = require('path')
var fs = require('fs')

var o = m._load
var loaded
var entryPoint = arguments[1].main.filename

m._load = function() {
  if (!loaded) {

    loaded = true

    var opts = { encoding: 'utf8' }
    var cmd = ['./fetch_modules', entryPoint].join(' ')
    cp.execSync(cmd, opts)
  }

  if (arguments[0].indexOf(':') > -1) {
    var origin = url.parse(arguments[0])
    var p = path.join(origin.hostname, origin.pathname)
    arguments[0] = p
  }

  return o.apply(o, arguments)
}

