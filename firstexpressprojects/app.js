const express = require('express');
//require looks for packages for express
const app = express();


app.get('/',(req, res) => res.send('Hello World'))
// app.get request for a particular function
app.listen(3000, () => console.log('server ready'))


app.get('/help',(req, res) => res.send('Hello World'))
// app.get request for a particular function
app.listen(3000, () => console.log('server ready'))

app.get('/contact',(req, res) => res.send('Hello World'))
// app.get request for a particular function
app.listen(3000, () => console.log('server ready'))

app.get('/contact us',(req, res) => res.send('Hello World'))
// app.get request for a particular function
app.listen(3000, () => console.log('server ready'))

app.get('/find us',(req, res) => res.send('Hello World'))
// app.get request for a particular function
app.listen(3000, () => console.log('server ready'))






