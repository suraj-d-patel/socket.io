const express = require('express');
const logger = require('morgan');
const http = require('http');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = '5120'
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
