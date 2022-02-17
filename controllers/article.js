const con = require('../utils/db');

const getAllArticles = (req, res) => {
	let query =`SELECT * FROM article`
	let articles
	con.query(query, (err, result) => {
		if(err) throw err;
		articles = result
		res.render('index', {
			articles: articles
		})
	})
};

const getArticleBySlug = (req, res) => {
	let query = `SELECT *,
					a.name as art_name,
					b.name as writer_name
					FROM article a
					INNER JOIN author b
					ON a.author_id=b.id WHERE slug="${req.params.slug}";`
	let article
	con.query(query, (err, result) => {
		if(err) throw err;
		article = result
		console.log(article)
		res.render('article', {
			article: article
		})
	})
};

const getAuthorArticles = (req, res) => {
	let query = `SELECT *, a.name as art_name, b.name as writer_name FROM article a INNER JOIN author b on a.author_id=b.id WHERE author_id="${req.params.author_id}";`
	let articles
	con.query(query, (err, result) => {
		if(err) throw err;
		articles = result
		name = result[0]
		res.render('author', {
			articles: articles,
			name: name
		})
	})
};

module.exports = {
	getAllArticles,
	getArticleBySlug,
	getAuthorArticles
}