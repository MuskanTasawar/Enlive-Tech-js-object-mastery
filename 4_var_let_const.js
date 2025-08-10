// task4_var_let_const.js

function scopeTest() {
    console.log("=== Function Start ===");

    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";

        console.log("Inside block:");
        console.log("varVariable:", varVariable);   // "I am var"
        console.log("letVariable:", letVariable);   // "I am let"
        console.log("constVariable:", constVariable); // "I am const"
    }

    console.log("\nOutside block:");
    console.log("varVariable:", varVariable); // Accessible (function-scoped)

    try {
        console.log("letVariable:", letVariable); // Error: not defined
    } catch (err) {
        console.log("letVariable: ERROR -", err.message);
    }

    try {
        console.log("constVariable:", constVariable); // Error: not defined
    } catch (err) {
        console.log("constVariable: ERROR -", err.message);
    }

    // Nested function example
    function innerFunction() {
        var innerVar = "Inner var";
        let innerLet = "Inner let";
        const innerConst = "Inner const";
        console.log("\nInside inner function:", innerVar, innerLet, innerConst);
    }

    innerFunction();

    try {
        console.log(innerVar); // Error: not defined
    } catch (err) {
        console.log("innerVar: ERROR -", err.message);
    }
}

scopeTest();
