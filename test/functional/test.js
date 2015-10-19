var expect;
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

describe("My Tests", function() {
	before(function() {
		chaiAsPromised.transferPromiseness = browser.transferPromiseness;
		chai.use(chaiAsPromised);
		expect = chai.expect;
		chai.Should();

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
