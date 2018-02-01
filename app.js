// express.static middleware

const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <link type="text/css" rel="stylesheet"
              href = "/static/css/style.css">
        </head>
        <body>
            <h1>express middleware 'static' demo</h1>
            <img src="/static/images/computerimage.png">
        </body>
        </html>
    `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Node server running at port " + port);
});