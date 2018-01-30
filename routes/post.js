var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
		var postData  = req.body;
		connection.query('INSERT INTO users SET ?', postData, function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		});
});

module.exports = router;
