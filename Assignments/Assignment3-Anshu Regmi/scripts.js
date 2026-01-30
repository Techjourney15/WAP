import { funcAdd, funcSub, funcMul, funcDiv } from "./calculator.js";

$(document).ready(function () {

    function calculate(operation) {

        let n1 = parseFloat($("#num1").val());
        let n2 = parseFloat($("#num2").val());

        if (isNaN(n1) || isNaN(n2)) {
            $("#result").text("Result: Please enter valid numbers");
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
                    $("#result").text("Result: Cannot divide by zero");
                    return;
                }
                result = funcDiv(n1, n2);
                break;

            default:
                $("#result").text("Result: Invalid operation");
                return;
        }

        $("#result").text("Result: " + result);
    }

    $("#add").click(function () {
        calculate("add");
    });

    $("#sub").click(function () {
        calculate("sub");
    });

    $("#mul").click(function () {
        calculate("mul");
    });

    $("#div").click(function () {
        calculate("div");
    });

});
