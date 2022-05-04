const express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended:false }));

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"> <meta charset="UTF-8">
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    <p> Este es un párrafo y su contenido debe ser azul</p>
    </body> </html>`)
});

app.get('/person/:id',(req,res)=>{
    res.render('person', { ID: req.params.id, Message: req.query.msg, Times: req.query.times });
});

app.get('/student', (req, res)=>{
    res.render('index');
});

app.get('/student', (req, res)=>{
    res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
});
app.listen(PORT);