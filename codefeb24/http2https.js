// A string url is given. It contains a URL with the HTTP protocol. Return this URL with the HTTPS protocol.


function http2https(url) {
    return url.replace('http','https')
  
  }