const http = require("http");
const express = require("express");

const app = express();

const myserver = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();  // Prevent favicon logging

    const myurl = url.parse(req.url);
    const pathname = myurl.pathname;
    const log = `${Date.now()} : ${pathname} New received\n`;

    console.log(myurl);  // Logs URL object

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            res.statusCode = 500;
            return res.end("Internal Server Error");
        }

        switch (pathname) {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("I am Arpit Pandey");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});

myserver.listen(8000, () => console.log("Server started on port 8000"));
