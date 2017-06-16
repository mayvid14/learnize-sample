var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var server = require('http').Server(app);
var dbinterface = require(path.join(__dirname, 'db', 'dbinterface.js'));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'public', 'resources'))
    }
    , filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});
var upload = multer({
    storage: storage
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/nm', express.static(path.join(__dirname, 'node_modules')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});
app.post('/getjobs', function (req, res) {
    dbinterface.getJobs(res);
});
app.post('/getclients', function (req, res) {
    dbinterface.getClients(res);
});
app.post('/getblogs', function (req, res) {
    dbinterface.getBlogs(res);
});
app.post('/login', function (req, res) {
    dbinterface.login(req.body.username, req.body.password, res);
});
app.post('/newblog', upload.single('file'), function (req, res) {
    var picurl = '../resources/' + req.file.filename;
    dbinterface.addBlog(req.body.title, req.body.description, picurl, res);
});
app.post('/newclient', upload.single('file'), function (req, res) {
    var picurl = '../resources/' + req.file.filename;
    dbinterface.addClient(req.body.title, picurl, res);
});
app.post('/addjob', function (req, res) {
    dbinterface.addJob(req.body.title,req.body.salary,req.body.location, req.body.desc, res);
});
app.listen(8080, function () {
    console.log('Connected to 8080');
});