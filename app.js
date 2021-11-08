const express = require('express')
const path = require('path')
const app = express()
const port = 3000;
const bodyParser = require('body-parser')
var favicon = require('serve-favicon');


//app.use(favicon(path.join(__dirname,'public','index.png')));

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public/')))

//let __dirPath = '/view/';
app.get('/', (req, res) => {
	res.render('index')
})
app.post('/', (req, res) => {
	if(req.body.departement.startsWith('974') && req.body.departement.lenght > 3 && req.body.departement.lenght < 5)
		res.redirect('https://www.jmstore.re/');
	else
		res.render('wrong')
})

app.listen(port, () => {
	
})