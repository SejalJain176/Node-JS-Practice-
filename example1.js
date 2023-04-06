//console.log("Hello")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require("fs");
//const express = require('express');
const home = fs.readFileSync('./express/index.html')
const about = fs.readFileSync('./express/about.html')
const services = fs.readFileSync('./express/services.html')
const contact = fs.readFileSync('./express/contact.html')
const joinform = fs.readFileSync('./express/joiningform.html')
//const submitform = fs.readFileSync('./express/submit.js')
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(home);
    }
    else if (url == '/about') {
        res.end(about);
    }
    else if (url == '/services') {
        res.end(services);
    }
    else if (url == '/contact') {
        res.end(contact);
    }

    else if (url == '/joiningform.html') {
        res.end(joinform);
    }
    else if (url == '/submit') {
       console.log(req.body)
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});