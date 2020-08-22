<<<<<<< HEAD


=======
>>>>>>> 7e5b14300f3aff3e14ba9a3b807ddffccbb1e947
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
        console.log("Ingreso");
            return window.location.href = './Views/micontrol2.html';
    })
    .catch (err => {
        console.log(err);
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

    console.log(correoRegistro, contrasenaRegistro);

    auth.createUserWithEmailAndPassword(correoRegistro, contrasenaRegistro)
    .then(userCredential => {
        console.log("Registro");
            return window.location.href = './Views/micontrol2.html';
    })
    .catch (err => {
        console.log("Usuario registrado");
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

//const db = firebase.firestore();
const sendGluco = document.querySelector(".sendButton3");
const formGluco = document.querySelector("#formGluco");

/*const db = localStorage.getItem("db");
console.log(db);*/

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
    console.log(data)
});



    /*localStorage.setItem("glucoPreprandial",glucoPreprandial);
    localStorage.setItem("foods",foods);
    localStorage.setItem("carbohydrates",carbohydrates);
    localStorage.setItem("glucoPostprandial",glucoPostprandial);
    localStorage.setItem("checkboxInput",checkboxInput);
    localStorage.setItem("checkboxPeriodo",checkboxPeriodo);


    Let glucoPrep = localStorage.getItem("glucoPreprandial");*/





   // return window.location.href = './informe4.html';
