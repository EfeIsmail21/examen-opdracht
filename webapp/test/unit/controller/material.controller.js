/*global QUnit*/

sap.ui.define([
	"ap/materialslist/controller/material.controller"
], function (Controller) {
	"use strict";

	QUnit.module("material Controller");

	QUnit.test("I should test the material controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
