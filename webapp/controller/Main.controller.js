sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {

    return Controller.extend("minera.mc.verempleados.controller.Main", {

        onBeforeRendering() {
            this._detailEmployeeView = this.getView().byId("detailEmployeeView");
        },

        onInit: function () {

            var oView = this.getView();
            //var i18nBundle = oView.getModel("i18n").getResourceBundle();

            /* var oJSONModelEmpl = new sap.ui.model.json.JSONModel();
            oJSONModelEmpl.loadData("./model/json/Employees.json", false);
            oView.setModel(oJSONModelEmpl, "jsonEmployees"); */

            this._bus = sap.ui.getCore().getEventBus();
            this._bus.subscribe("flexible", "showEmployee", this.showEmployeeDetails, this);

//            this._bus.subscribe("incidence", "onSaveIncidence", this.onSaveODataIncidence, this);
/*
            this._bus.subscribe("incidence", "onDeleteIncidence", function (channelId, eventId, data) {

                var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

                this.getView().getModel("incidenceModel").remove(
                    "/IncidentsSet(IncidenceId='" + data.IncidenceId +
                    "',SapId='" + data.SapId +
                    "',EmployeeId='" + data.EmployeeId + "')", {
                    success: function () {
                        this.onReaderODataIncidence.bind(this)(data.EmployeeId);
                        sap.m.MessageToast.show(oResourceBundle.getText("odataDeleteOK"));
                    }.bind(this),
                    error: function (e) {
                        sap.m.MessageToast.show(oResourceBundle.getText("odataDeleteKO"));
                    }.bind(this)
                });

            }, this);
*/

        },

        showEmployeeDetails: function (categoria, nameEvent, path) {
            console.log(path);
            var detailView = this.getView().byId("detailEmployeeView");
            detailView.bindElement("employeeModel>" + path);

            /* var incidenceModel = new sap.ui.model.json.JSONModel([]);
            detailView.setModel(incidenceModel, "incidenceModel");
            detailView.byId("tableIncidence").removeAllContent(); */

            // this.onReaderODataIncidence(this._detailEmployeeView.getBindingContext("odataNorthwind").getObject().EmployeeID);

        },

    });

});