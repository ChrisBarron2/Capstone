const express = require('express');
//require looks for packages for express
const path = require('path');
const app = express();


app.get('/',function(req,res){
    res.sendFile(`${__dirname}/public/views/index.html`);
  
  });

  // app.get('/index',function(req,res){
  //   res.sendFile('/index.html');
  // });

  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
  });


  app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);






