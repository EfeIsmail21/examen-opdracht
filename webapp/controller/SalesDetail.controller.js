sap.ui.define(["sap/ui/core/mvc/Controller"], function(BaseController) {
    "use strict";

    return BaseController.extend("ap.materialslist.controller.App", {
        onInit: function() {
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter
                .getRoute("sales")
                .attachPatternMatched(this._onShipmentMatched, this);
            oRouter
                .getRoute("salesdetail")
                .attachPatternMatched(this._onShipmentMatched, this);
        },
        _onShipmentMatched: function(oEvent) {
            let sSaleID = oEvent.getParameter("arguments").sale || "0";
            this.getView().bindElement({
                path: `/SaleSet('${sSaleID}')`,
                model: "",
            });

            this.getView()
                .byId("saleTable")
                .bindItems({
                    path: `/SaleSet('${sSaleID}')/SaleItemSet`,
                    template: this.getView().byId("saleTable").getBindingInfo("items")
                        .template,
                });
        },

        onExit: function() {
            this.oRouter
                .getRoute("list")
                .detachPatternMatched(this._onDeliveryMatched, this);
            this.oRouter
                .getRoute("detail")
                .detachPatternMatched(this._onDeliveryMatched, this);
        },
    });
});