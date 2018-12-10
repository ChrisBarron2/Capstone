const express = require('express'); //loading express
const app = express(); //Create a new instance 
require('dontenv').load()
app.set('view engine', 'pug')
app.use(express.static('public'))

// route or endpoints
app.get('/maps', function(req, res) {
    res.render('maps', {
                          title: 'maps',
                          heading: "Google API's",
                          key: process.env.key
                          })
});

app.get('/url_shortener', function(req, res) {
    res.render('maps', {
                          title: 'URL_Shortener',
                          heading: "Google API's",
                          key: process.env.key
                          })
});

app.get('/youtube', function(req, res) {
    res.render('maps', {
                          title: 'YouTube',
                          heading: "Google API's",
                          key: process.env.key
                          })
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

  app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
