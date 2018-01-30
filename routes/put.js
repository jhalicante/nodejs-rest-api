var express = require('express');
var router = express.Router();

/* PUT update person. */
router.put('/', function(req, res, next) {
		console.log(req.body.ID);

		connection.query('UPDATE `users` SET `fname`=?,`mname`=?,`lname`=? WHERE `ID`=?', [req.body.fname,req.body.mname, req.body.lname, req.body.ID], function (error, results, fields) {
	   if (error) throw error;
	   res.end(JSON.stringify(results));
	 });
});

module.exports = router;
