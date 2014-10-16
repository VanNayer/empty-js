var chai = require('chai')
var app = require('../app/app.js');

it('should run a dummy test', function() {
	chai.expect(
		app.run()
	).to.equal(8000)
	 
})