var express = require('express');
var router = express.Router();

/* Delete delete person. */
router.delete('/:ID', function(req, res, next) {
	console.log([req.params.ID]);
	connection.query('DELETE FROM users WHERE `ID`=?', [req.params.ID], function (error, results, fields) {
	   if (error) throw error;
	   res.end('Record has been deleted!');
	});
});

module.exports = router;
