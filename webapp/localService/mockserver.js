sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";

	return {
		init: function () {
			// create
			var oMockServer = new MockServer({
				rootUri: "/northwind/V2/Northwind/Northwind.svc/"
			});

			// configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: 500
			});
			
			var basePath = jQuery.sap.getModulePath("workshop.overview.localService");

			oMockServer.simulate(basePath + "/metadata.xml", {
				sMockdataBaseUrl: basePath + "/mockdata",
				bGenerateMissingMockData: true
			});

			// start
			oMockServer.start();
		}
	};

});