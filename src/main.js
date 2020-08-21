const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e)=>{ e.preventDefault();
    return window.location.href = "./Views/micontrol2.html"
})
