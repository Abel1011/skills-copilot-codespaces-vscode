// Create web server
// Run: node comments.js

// Load modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

// Create server
http.createServer(function (request, response) {
    // Get querystring
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    var params = querystring.parse(query);

    // Print querystring
    console.log('pathname: ' + pathname);
    console.log('query: ' + query);
    console.log('params: ' + params);

    // Check pathname
    if (pathname == '/') {
        // Read html file
        fs.readFile('comments.html', function (err, data) {
            // Check error
            if (err) {
                // Print error message
                console.log(err);
                // Send error response
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end('<h1>404 Not Found</h1>');
            } else {
                // Send response
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data.toString());
            }
        });
    } else if (pathname == '/comment') {
        // Get comment
        var comment = params['comment'];
        // Print comment
        console.log('comment: ' + comment);
        // Send response
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1>' + comment + '</h1>');
    } else {
        // Send error response
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>404 Not Found</h1>');
    }
}).listen(8080);

// Print message
console.log('Server running at http://localhost:8080/');