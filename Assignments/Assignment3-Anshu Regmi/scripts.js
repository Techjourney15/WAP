import { funcAdd, funcSub, funcMul, funcDiv } from "./calculator.js";

$(document).ready(function () {
    let selectedOperation = "";

    function calculate(operation) {
        const n1 = parseFloat($("#num1").val());
        const n2 = parseFloat($("#num2").val());

        if (isNaN(n1) || isNaN(n2)) {
            $("#result").val("Please enter valid numbers");
            return;
        }

        let result;

        switch (operation) {
            case "add":
                result = funcAdd(n1, n2);
                break;
            case "sub":
                result = funcSub(n1, n2);
                break;
            case "mul":
                result = funcMul(n1, n2);
                break;
            case "div":
                if (n2 === 0) {
                    $("#result").val("Cannot divide by zero");
                    return;
                }
                result = funcDiv(n1, n2);
                break;
            default:
                $("#result").val("Select an operator first");
                return;
        }

        $("#result").val(result);
    }

    $("#btn_add").click(function () {
        selectedOperation = "add";
        $("#symbol").val("+");
    });

    $("#btn_sub").click(function () {
        selectedOperation = "sub";
        $("#symbol").val("-");
    });

    $("#btn_mul").click(function () {
        selectedOperation = "mul";
        $("#symbol").val("×");
    });

    $("#btn_div").click(function () {
        selectedOperation = "div";
        $("#symbol").val("÷");
    });

    $("#btn_res").click(function () {
        calculate(selectedOperation);
    });
});
