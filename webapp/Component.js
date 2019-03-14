sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("workshop.overview.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});