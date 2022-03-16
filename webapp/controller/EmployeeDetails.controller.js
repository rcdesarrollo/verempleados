//@ts-nocheck
sap.ui.define([
    "minera/mc/verempleados/controller/Base.controller",
    "minera/mc/verempleados/model/formatter",
    "sap/m/MessageBox"
], function (Base, formatter, MessageBox) {

    function onInit() {

    };



    var EmployeeDetails = Base.extend("minera.mc.verempleados.controller.EmployeeDetails", {});

    EmployeeDetails.prototype.onInit = onInit;

    EmployeeDetails.prototype.Formatter = formatter;


    return EmployeeDetails;

});