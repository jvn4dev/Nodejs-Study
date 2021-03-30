var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(url.parse(_url, true));
    var title = queryData.id;
    var pathName = url.parse(_url, true).pathname;

    if (pathName === "/") {
        if (title === undefined) {
            fs.readdir(`./data/`, function (err, filelist) {
                title = "Web";
                description = "Hello Nodejs";
                var list = `<ul>`;
                var i = 0;
                while (i < filelist.length) {
                    var list = list + `<li><a href="?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i++;
                }
                list += `</ul>`;

                var template = `
                <!doctype html>
                <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    ${list}
                    <h2>${title}</h2>
                    <p>${description}</p>
                </body>
                </html>
                `;

                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readdir(`./data/`, function (err, filelist) {
                var list = `<ul>`;
                var i = 0;
                while (i < filelist.length) {
                    var list = list + `
                    <li><a href="?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i++;
                }
                list += `</ul>`;

                fs.readFile(`data/${title}`, 'utf-8', function (err, description) {
                    var template = `
                        <!doctype html>
                        <html>
                        <head>
                            <title>WEB1 - ${title}</title>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1><a href="/">WEB</a></h1>
                            ${list}
                            <h2>${title}</h2>
                            <p>${description}</p>
                        </body>
                        </html>
                        `;
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }  
    } else {
        response.writeHead(404);
        response.end("Not Found.");
    }       
});
app.listen(3000);