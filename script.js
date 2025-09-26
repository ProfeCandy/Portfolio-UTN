let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
//oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("C");
        habilidades[3].classList.add("Cplus");
        habilidades[4].classList.add("SQL");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// Manejo del formulario de contacto
document.getElementById("form-contacto").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

// Validaciones
    if(nombre === "" || email === "" || mensaje === ""){
        alert("Por favor completa los campos obligatorios (Nombre, Email y Mensaje).");
        return;
    }

    let nombreR = /^[a-zA-ZÀ-ÿ\s]+$/;
    if(!nombreR.test(nombre)){
    alert("El nombre solo puede contener letras y espacios.");
    return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Por favor ingresa un email válido.");
        return;
    }

    if(telefono !== "" && !/^\d{7,15}$/.test(telefono)){
        alert("Por favor ingresa un número de teléfono válido (solo dígitos, 7-15).");
        return;
    }

 // Hacer como que envio el formulario
    alert("Formulario enviado correctamente. ¡Gracias por contactarme!");
    document.getElementById("form-contacto").reset();

});