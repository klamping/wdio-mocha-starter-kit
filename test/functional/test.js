var expect = require("chai").expect;

describe("My Tests", function() {
	before(function() {
		return browser
			.url("/")
	});

	it("should display red fedoras", function() {
		return browser
			.setValue("#twotabsearchtextbox", "red fedora")
			.submitForm(".nav-searchbar")
			.getTitle().should.eventually.contain("red fedora")
			.webdrivercss("search results", {
				name: "results",
				elem: "#atfResults"
			}, function(err, res) {
				expect(err).to.not.exist;

				expect(res.results[0].isWithinMisMatchTolerance).to.be.true;
			})
	});
});
