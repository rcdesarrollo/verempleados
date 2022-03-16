// @ts-nocheck
sap.ui.define([
    "minera/mc/verempleados/controller/Base.controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
	 */
    function (Base, Filter, FilterOperator) {
        "use strict";

        function onInit() {
            this._bus = sap.ui.getCore().getEventBus();            
        };

        function showEmployee(oEvent ){
            var path = oEvent.getSource().getBindingContext("employeeModel").getPath();
            this._bus.publish("flexible","showEmployee",path);
        };



        var Main = Base.extend("minera.mc.verempleados.controller.MasterEmployee", {});

        Main.prototype.onInit = onInit;

        Main.prototype.showEmployee = showEmployee;

        return Main;

    });
