var express = require('express');
var multer=require('multer')
var cors = require('cors');
require('dotenv').config()

var app = express();
const upload = multer({ dest: 'uploads/' })


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  var upfile=req.file
  // req.body will hold the text fields, if there were any
  res.json({name:upfile.originalname, type:upfile.mimetype, size:upfile.size})
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
