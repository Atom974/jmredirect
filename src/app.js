const express = require('express')
const path = require('path')
const app = express()
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
app.set('view engine', 'pug')
console.log(__dirname, '/css/');
app.use(express.static(path.join(__dirname, '/css/')))
app.use(express.static(path.join(__dirname, '/public/')))

//let __dirPath = '/view/';
app.get('/', (req, res) => {
	res.render('index')
})
app.post('/', (req, res) => {
	if(req.body.departement == 974)
		res.redirect('https://www.jmstore.re/');
	else
		res.render('wrong')
})

app.listen(port, () => {
	console.log(`example app listening at http://localhost:${port}`)
})