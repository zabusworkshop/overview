sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("workshop.overview.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf workshop.overview.view.Detail
		 */
		onInit: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onPatternMatched.bind(this));
		},

		_onPatternMatched: function(oEvent) {
			var nEmpId = oEvent.getParameters().arguments.empId;
			var oModel = this.getOwnerComponent().getModel();
			oModel.metadataLoaded()
				.then(function() {
					var sPath = oModel.createKey("/Employees", {
						EmployeeID: decodeURIComponent(nEmpId)
					});
					this.getView().bindElement({
						path: sPath
					});
				}.bind(this));
		}

	});

});