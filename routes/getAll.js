var express = require('express');
var router = express.Router();

/* GET all user. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * from users WHERE 1 ORDER BY ID DESC', function (error, results, fields) {
			console.log(results);
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});

module.exports = router;
