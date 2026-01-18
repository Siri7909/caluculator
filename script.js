function calculateSGPA() {
    let g1 = parseFloat(document.getElementById("g1").value);
    let c1 = parseFloat(document.getElementById("c1").value);

    let g2 = parseFloat(document.getElementById("g2").value);
    let c2 = parseFloat(document.getElementById("c2").value);

    let g3 = parseFloat(document.getElementById("g3").value);
    let c3 = parseFloat(document.getElementById("c3").value);

    let totalCredits = c1 + c2 + c3;
    let totalPoints = (g1*c1) + (g2*c2) + (g3*c3);

    let sgpa = totalPoints / totalCredits;

    document.getElementById("sgpaResult").innerHTML =
        "Your SGPA is: " + sgpa.toFixed(2);
}

function calculateCGPA() {
    let sgpaValues = document.getElementById("sgpas").value.split(",");
    let sum = 0;

    for (let i = 0; i < sgpaValues.length; i++) {
        sum += parseFloat(sgpaValues[i]);
    }

    let cgpa = sum / sgpaValues.length;

    document.getElementById("cgpaResult").innerHTML =
        "Your CGPA is: " + cgpa.toFixed(2);
}
