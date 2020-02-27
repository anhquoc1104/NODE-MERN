const express = require('express');
const app = express();
//route => n link
//link

// const handle = (req, res) => {
//    res.send('hello');
// };
let arrLearn = ['JS', 'NODE', 'REACT', 'HTML', 'CSS'];
let arrNum = [1, 2, 3, 4, 5];

app.locals.num = arrNum; //local variable


app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
   res.render('home.ejs');
});
app.get('/learn', (req, res) => {
   res.render('learn.ejs', {arrLearn}); //set variable = param.
});
app.get('/calc/:phepTinh/:numA/:numB', require('./controllers/CalcControl.js'));

app.listen(5555, ()=>{
   console.log('Hello');
});
