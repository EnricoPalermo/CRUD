function validarCamporequerido(input){
    if(input.value.trim() != ""){
        input.className = "form-control is-valid"
        return true
    }else{
        input.className = "form-control is-invalid"
        return false
    }
}
function validarCodigo(input){
    if(input.value.trim() != "" && input.value.trim().length  >= 3){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarNumeros(input){
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(input.value)){
        input.className = "form-control is-valid"
        return true
    }else{
        input.className = "form-control is-invalid"
        return false
    }
}

function validarURL(input){
    // crear expresion regular
    let  patron =/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if(input.value.trim() != "" && patron.test(input.value.trim())){
        input.className = "form-control is-valid"
        return true
    }else{
        input.className = "form-control is-invalid"
        return false
    }
}
function validarGeneral(e){
    // previene que recargue la pagina
    e.preventDefault();
    let alerta = document.querySelector("#error")
    if(validarCodigo(codigo) && validarCamporequerido(producto) && validarCamporequerido(descripcion) && validarNumeros(cantidad) && validarURL(url)){
        alerta.className = "alert alert-danger mt-4 d-none"
    }else{
        console.log("corregir datos")
        alerta.className = "alert alert-danger mt-4"
    }
    
}
// traer los input que quiero validar 

let codigo = document.querySelector("#codigo");
let cantidad = document.querySelector("#cantidad");
let url = document.querySelector("#url")
let producto = document.querySelector("#producto");
let descripcion = document.querySelector("#descripcion");
let formulario = document.querySelector("#formProducto")

// le agregamos un evento 

codigo.addEventListener("blur",() => {validarCamporequerido(codigo)});
cantidad.addEventListener("blur",() => {validarNumeros(cantidad)});
url.addEventListener("blur",()=> {validarURL(url)})
producto.addEventListener("blur",() => {validarCamporequerido(producto)});
descripcion.addEventListener("blur",() => {validarCamporequerido(descripcion)});
formulario.addEventListener("submit", validarGeneral)