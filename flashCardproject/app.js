const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();
let db

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect('mongodb://<Chris03>:<Strong3R>@ds155130.mlab.com:55130/quotes', (err, database) => {
   if (err) return console.log(err)
   app.listen(3000, function () {
       db = database.db('quest')
       console.log("listening on port 3000")
       mongo.connect(url,{}, function(err){
        if(err)console.log(err);
      });

   })
})

app.get('/', (req, res) => {
   let cursor = db.collection("quotes").find().toArray((err, results) => {
       if (err) return console.log(err)
       console.log(results)
       res.render('index.pug')
   })
})

   app.post('/quotes', (req, res) => {
       db.collection('quotes').save(req.body, (err, result) => {
           if (err) return console.log(err)
           console.log('saved to database :)')
           res.redirect('/')
       })
   })


