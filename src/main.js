

//Inicio sesion
const formLogin = document.querySelector("#formLogin");
if(formLogin)
formLogin.addEventListener("submit", (e) => {e.preventDefault();

    const correoInicio = document.querySelector("#correoInicio").value;
    const contrasenaInicio = document.querySelector("#contrasenaInicio").value;
    const mensajeInicio = document.querySelector("#mensajeInicio");

    console.log(correoInicio, contrasenaInicio);

    auth.signInWithEmailAndPassword(correoInicio, contrasenaInicio)
    .then(userCredential => {
    
            return window.location.href = './Views/micontrol2.html';
    })
    .catch (err => {
        
        if (err.code === "auth/user-not-found"){
                mensajeInicio.innerHTML = "Usuario no registrado, por favor regístrese";
        }
        if(err.code === "auth/wrong-password"){
                mensajeInicio.innerHTML = "Contraseña incorrecta";
        }
    })

});

//Registrar usuario
const formRegistry = document.querySelector("#formRegistry");
if(formRegistry)
formRegistry.addEventListener("submit", (e) => {e.preventDefault();
    const correoRegistro = document.querySelector("#correoRegistro").value;
    const contrasenaRegistro = document.querySelector("#contrasenaRegistro").value;
    const mensajeRegistro = document.querySelector("#mensajeRegistro");

    auth.createUserWithEmailAndPassword(correoRegistro, contrasenaRegistro)
    .then(userCredential => {
        
            return window.location.href = './Views/micontrol2.html';
    })
    .catch (err => {
        
        mensajeRegistro.innerHTML = "Usuario ya registrado, inicie sesión";
    })

});

const linkRegistar = document.querySelector("#linkRegistar");
if(linkRegistar)
linkRegistar.addEventListener("click", (e) => {e.preventDefault();
    const containerRegistry = document.querySelector("#containerRegistry");
    const containerLogIn = document.querySelector("#containerLogIn");
    containerRegistry.style.display= "block";
    containerLogIn.style.display= "none";
});

const linkInicio = document.querySelector("#linkInicio");
if(linkInicio)
linkInicio.addEventListener("click", (e) => {e.preventDefault();
    const containerRegistry = document.querySelector("#containerRegistry");
    const containerLogIn = document.querySelector("#containerLogIn");
    containerRegistry.style.display= "none";
    containerLogIn.style.display= "block";
});


const sendGluco = document.querySelector(".sendButton3");
const formGluco = document.querySelector("#formGluco");


if(formGluco)
formGluco.addEventListener("submit", async (e) => { e.preventDefault();
    console.log("funciono");
    const glucoPreprandial = document.querySelector("#glucoPreprandial").value;
    const foods = document.querySelector("#foods").value;
    const carbohydrates = document.querySelector("#carbohydrates").value;
    const glucoPostprandial = document.querySelector("#glucoPostprandial").value;
    const checkboxInput = document.querySelector('input[name = "comida"]:checked').value;
    const checkboxPeriodo = document.querySelector('input[name = "periodo"]:checked').value;

    const data = await db.collection("users").doc().set({
        glucoPreprandial,
        foods,
        carbohydrates,
        glucoPostprandial,
        checkboxInput,
        checkboxPeriodo
    })
   
    return window.location.href = './informe4.html';
    
});

const infoPreBreakfast = document.querySelector("#infoPreBreakfast");
const infoCarbohidratesBreakfast = document.querySelector("#infoCarbohidratesBreakfast");
const infoPostBreakfast = document.querySelector("#infoPostBreakfast");

const infoPreLunch = document.querySelector("#infoPreLunch");
const infoCarbohidratesLunch = document.querySelector("#infoCarbohidratesLunch");
const infoPostLunch = document.querySelector("#infoPostLunch");

const infoPreDinner = document.querySelector("#infoPreDinner");
const infoCarbohidratesDinner = document.querySelector("#infoCarbohidratesDinner");
const InfoPostDinner = document.querySelector("#InfoPostDinner");

const InfoPeriodo = document.querySelector("#InfoPeriodo");

let getUsers = db.collection("users").doc("person") 

    getUsers.get().then(function(doc) {
            if (doc.exists) {
            
                infoPreBreakfast.innerHTML = doc.data().glucoPreprandial;
                infoCarbohidratesBreakfast.innerHTML  = doc.data().carbohydrates;
                infoPostBreakfast.innerHTML = doc.data().glucoPostprandial;

                infoPreLunch.innerHTML = doc.data().glucoPreprandial;
                infoCarbohidratesLunch.innerHTML  = doc.data().carbohydrates;
                infoPostLunch.innerHTML = doc.data().glucoPostprandial;

                infoPreDinner.innerHTML = doc.data().glucoPreprandial;
                infoCarbohidratesDinner.innerHTML  = doc.data().carbohydrates;
                InfoPostDinner.innerHTML = doc.data().glucoPostprandial;

                InfoPeriodo.innerHTML = doc.data().checkboxPeriodo;
            } 
    })
       








    /*localStorage.setItem("glucoPreprandial",glucoPreprandial);
    localStorage.setItem("foods",foods);
    localStorage.setItem("carbohydrates",carbohydrates);
    localStorage.setItem("glucoPostprandial",glucoPostprandial);
    localStorage.setItem("checkboxInput",checkboxInput);
    localStorage.setItem("checkboxPeriodo",checkboxPeriodo);
    Let glucoPrep = localStorage.getItem("glucoPreprandial");*/





