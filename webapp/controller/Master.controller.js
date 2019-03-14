sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("workshop.overview.controller.Master", {
		
		onEmplpoyeeSelected: function (oEvent) {
			var oBindingContext = oEvent.getParameter("listItem").getBindingContext();
			var nEmpId = oBindingContext.getProperty("EmployeeID");
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				empId: encodeURIComponent(nEmpId)
			}, true);
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf workshop.overview.view.Master
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf workshop.overview.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf workshop.overview.view.Master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf workshop.overview.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});