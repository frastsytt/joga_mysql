const express = require('express')
const app = express()
const path = require('path')
const mysql = require('mysql')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const hbs = require('express-handlebars')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.engine({
	extname: 'hbs',
	defaultLayout: 'main',
	layoutsDir: __dirname+'/views/layouts/'
}))

app.use(express.static('public'))

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "joga_mysql"
});

con.connect(function(err) {
	if (err) throw err;
	console.log(`Connected to joga_mysql`)
})

const articleRoutes = require('./routes/article');
app.use('/', articleRoutes);
app.use('/article', articleRoutes);
app.use('/author', articleRoutes);


app.listen(3000, () => {
	console.log('App is listening on http://localhost:3000')
})