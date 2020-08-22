const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) =>{e.preventDefault();
    window.location.href = "./Views/micontrol2.html";
})



const sendGluco = document.querySelector(".sendButton3");
const formGluco = document.querySelector("#formGluco");
const checkboxInput = document.querySelector(".checkboxInput");

checkboxInput.addEventListener("change", (e) =>{
    
    console.log(e.target.value);

})


formGluco.addEventListener("submit", (e) => { e.preventDefault();
    console.log("funciono");
    const glucoPreprandial = document.querySelector("#glucoPreprandial").value;
    const foods = document.querySelector("#foods").value;
    const carbohydrates = document.querySelector("#carbohydrates").value;
    const glucoPostprandial = document.querySelector("#glucoPostprandial").value;
    console.log(glucoPreprandial,foods,carbohydrates,glucoPostprandial);

})



