function performAND() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    
    if (isNaN(input1) || isNaN(input2) || (input1 !== 0 && input1 !== 1) || (input2 !== 0 && input2 !== 1)) {
        document.getElementById("output").innerText = "Invalid input. Please enter 0 or 1.";
    } else {
        var output = input1 & input2;
        document.getElementById("output").innerText = "Output: " + output;
        addToTruthTable(input1, input2, output);
    }
}

function addToTruthTable(input1, input2, output) {
    var table = document.querySelector("table");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerText = input1;
    cell2.innerText = input2;
    cell3.innerText = output;
}