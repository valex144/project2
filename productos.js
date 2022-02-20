let imagen = document.getElementById("imagengrande");
let url = "imagenes/des.jfif";

imagen.src= url;

function sombra(){
    let cont = document.getElementById("display");
    cont.style.backgroundImage = "url(" + url + ")";
    cont.style.backgroundSize = "100%";
    cont.style.left = "400px";
    cont.innerHTML = "<p>" + imagen.alt + "</p>"

}

function sinsombra(){
    let cont = document.getElementById("display");
    cont.innerHTML = "";
    cont.style.left = "400px"
}


let boton_principal = document.getElementById("boton");

function mostrarimagen(){
 let divImagen = document.getElementById("display");
 divImagen.style.display = "block";
 boton_principal.innerHTML = "Ocultar Imagen"
}

function ocultarimagen(){
 let divImagen = document.getElementById("display");
 divImagen.style.display = "none";
 boton_principal.innerHTML = "Mostrar Imagen";
}

function cambiar(){
 if (boton_principal.innerHTML == "Ocultar Imagen"){
  ocultarimagen();
 }else{
  mostrarimagen();
 }
}


function createobject(){
    const person = {
        name : document.getElementById("nombre").value,
        last_name : document.getElementById("apellido").value,
        email: document.getElementById("correo").value,
        printNames: function(){
            console.log(this.name + " " + this.last_name+ " " + this.email)
        }
    };
    return person
}


function Agregar(){
    userdata = createobject();
    userdata.printNames();
    
}