var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathName = url.parse(_url, true).pathname;

  function templateHTML(title, list, body){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${body}
    </body>
    </html>
    `
  }
  function templateList(filelist) {
    var list = `<ul>`;
    var i = 0;
    while (i < filelist.length) {
      list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      i += 1;
    }
    list += `</ul>`;

    return list;
  }

  if (pathName === '/') {
    if (queryData.id == undefined) {
      fs.readdir('./data', function (error, filelist) {
        // console.log(filelist);
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = templateList(filelist)
        var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
        // response.end(fs.readFileSync(__dirname + _url));
        // response.end(queryData.id);
        response.writeHead(200); // 200 파일 전송 성공
        response.end(template);
      })
    } else {
      fs.readdir('./data', function (error, filelist) {
        // console.log(filelist);
        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          var title = queryData.id;
          var list = templateList(filelist)
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          // response.end(fs.readFileSync(__dirname + _url));
          // response.end(queryData.id);
          response.writeHead(200); // 200 파일 전송 성공
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404); // 404 파일을 찾을 수 없는 경우
    response.end('Not found');
  }

});
app.listen(3000);