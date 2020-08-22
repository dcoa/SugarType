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



