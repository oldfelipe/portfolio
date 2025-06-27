function somar() {
    verificar();
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    verificar();
    var resultado = num1 * num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    verificar();
    var resultado = num1 / num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
function subtrair() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    verificar();
    var resultado = num1 - num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
function verificar(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

}