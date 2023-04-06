// Menghitung Luas Segitiga
function calculateTriangleArea(){
    const ta1 = parseFloat(document.getElementById("base-triangle").value);
    const ta2 = parseFloat(document.getElementById("height-triangle").value);
    const calculateTriangleArea = 0.5 * ta1 * ta2;
    if (!calculateTriangleArea || isNaN(ta1) || isNaN(ta2)) {
        throw new Error("Invalid input");
     }
    document.getElementById("resultTriangleArea").textContent = "L = 1/2 x "+ta1+" x "+ta2;
    document.getElementById("calculateTriangleArea").textContent = "L = "+calculateTriangleArea;
}
// Reset Luas Segitiga
function resetTriangleArea(){
    document.getElementById("form-triangle-area").reset;
    document.getElementById("resultTriangleArea").innerHTML = "L = 1/2 x   x";
    document.getElementById("calculateTriangleArea").innerHTML = "L = ";
}


// Menghitung Keliling Segitiga
function calculateTriangleCircumference(){
    const tc1 = parseFloat(document.getElementById("side-triangle1").value);
    const tc2 = parseFloat(document.getElementById("side-triangle2").value);
    const tc3 = parseFloat(document.getElementById("side-triangle3").value);
    let rtc = tc1+tc2+tc3;
    if (!calculateTriangleCircumference || isNaN(tc1) || isNaN(tc2) || isNaN(tc3)) {
        throw new Error("Invalid input");
      }
    document.getElementById("hasilsegitiga").textContent = "K = "+tc1+" + "+tc2+" + "+tc3;
    document.getElementById("calculateTriangleCircumference").textContent = "K = "+rtc;
}
// Reset Keliling Segitiga
function resetTriangleCircumference(){
    // document.getElementById("form-triangle-circumference").reset;
    document.getElementById("hasilsegitiga").textContent = "K = + +";
    document.getElementById("calculateTriangleCircumference").innerHTML = "L = ";
}

// Menghitung Luas Jajar Genjang
function calculateParallellogramArea(){
    const pb = parseFloat(document.getElementById("base-parallellogram").value);
    const ph = parseFloat(document.getElementById("height-parallellogram").value);
    let rpa = pb*ph;
    if (!calculateParallellogramArea || isNaN(pb) || isNaN(ph)) {
        throw new Error("Invalid input");
      }
    document.getElementById("resultParallellogramArea").textContent = "L = "+pb+" x "+ph;
    document.getElementById("calculateParallellogramArea").textContent = "L = "+rpa;
}
// Reset Luas Jajar Genjang
function resetParallellogramArea(){
    // document.getElementById("form-parallellogram-area").reset;
    document.getElementById("resultParallellogramArea").textContent = "L =   x   ";
    document.getElementById("calculateParallellogramArea").innerHTML = "L = ";
}

// Menghitung Keliling Jajar Genjang
function calculateParallellogramCircumference(){
    const psa = parseFloat(document.getElementById("sideA").value);
    const psb = parseFloat(document.getElementById("sideB").value);
    const rpc = 2*(psa+psb);
    if (!calculateParallellogramCircumference || isNaN(psa) || isNaN(psb)) {
        throw new Error("Invalid input");
    }
    document.getElementById("formulaParallellogramCircumference").textContent = "K = 2 x ("+psa+" + "+psb+") ";
    document.getElementById("resultParallellogramCircumference").textContent = "K = "+rpc;
}
// Reset Luas Jajar Genjang
function resetParallellogramCircumference(){
    document.getElementById("formulaParallellogramCircumference").textContent = "K = 2 x ( + )";
    document.getElementById("resultParallellogramCircumference").textContent = "K = ";
}
