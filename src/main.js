
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {e.preventDefault();
    return window.location.href = './Views/micontrol2.html';
});

const buttonGlucometrias = document.querySelector("#buttonGlucometrias");
buttonGlucometrias.addEventListener("click", () => {
    window.location.href = './Views/glucometrias3.html';
});

const buttonMedicamentos = document.querySelector("#buttonMedicamentos");
buttonMedicamentos.addEventListener("click", () => {
    window.location.href = './Views/medicamentos5.html';
});

const buttonExamenes = document.querySelector("#buttonExamenes");
buttonExamenes.addEventListener("click", () => {
    window.location.href = './Views/examenes6.html';
});

const buttonDoctor = document.querySelector("#buttonDoctor");
buttonDoctor.addEventListener("click", () => {
    window.location.href = './Views/doctor8.html';
});

