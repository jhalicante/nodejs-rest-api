var express = require('express');
var router = express.Router();

/* GET person id. */
router.get('/:id', function(req, res, next) {
	// console.log(req.params.id);
	connection.query('SELECT * from users where id=?', [req.params.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });

});

module.exports = router;
