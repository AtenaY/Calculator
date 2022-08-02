function addValue(){

    var oper1 = document.getElementById("input_a").value;
    var oper2 = document.getElementById("input_b").value;
    var val1 = parseInt(oper1, 10);
    var val2 = parseInt(oper2, 10);
    var result = val1 + val2;
    document.getElementById("output").innerText = oper1.concat(" + ", oper2, " = ", result.toString());

    
    document.mycalculator.output.value = text;
}


function mulValue(){

    var oper1 = document.getElementById("input_a").value;
    var oper2 = document.getElementById("input_b").value;
    var val1 = parseInt(oper1, 10);
    var val2 = parseInt(oper2, 10);
    var result = val1 * val2;
    document.getElementById("output").innerText = oper1.concat(" * ", oper2, " = ", result.toString());


    document.mycalculator.output.value = text;
}

function divValue(){

    var oper1 = document.getElementById("input_a").value;
    var oper2 = document.getElementById("input_b").value;
    var val1 = parseInt(oper1, 10);
    var val2 = parseInt(oper2, 10);
    var result = val1 / val2;
    document.getElementById("output").innerText = oper1.concat(" / ", oper2, " = ", result.toString());

    document.mycalculator.output.value = text;
}


