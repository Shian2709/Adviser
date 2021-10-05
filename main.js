const mostrar=()=> {
    let $date_one = parseInt(document.getElementById("question_1").value);
    let $date_two = parseInt(document.getElementById("question_2").value);
    let $date_three = parseInt(document.getElementById("question_3").value);
    let $text = document.getElementById("date");
    const totalTrabajador = $date_one * $date_two;
    const porcentajeSueldo = Math.round((100 * totalTrabajador) / $date_three);
    if ($date_three > totalTrabajador) {
        var x = $text.textContent = `Los trabajadores ocupan el ${porcentajeSueldo}% de tu ganancia mensual que es de ${$date_three}`;
        $text.setAttribute("readonly", "");
    }
    else {
        var x = $text.textContent = `No se puede hacer el cálculo porque la cantidad de trabajadores y su ganancia es mayor que el monto mensual`
        $text.style.color = "red";
        $text.setAttribute("readonly", "");
    }
    document.getElementById("reproducir").addEventListener("click", () => {
        decir(x);
    });
    function decir(x) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(x));
    }
}