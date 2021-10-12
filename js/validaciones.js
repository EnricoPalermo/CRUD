export function validarCamporequerido(input){
    if(input.value.trim() != ""){
        input.className = "form-control is-valid"
        return true
    }else{
        input.className = "form-control is-invalid"
        return false
    }
}
export function validarCodigo(input){
    if(input.value.trim() != "" && input.value.trim().length  >= 3){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validarNumeros(input){
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(input.value)){
        input.className = "form-control is-valid"
        return true
    }else{
        input.className = "form-control is-invalid"
        return false
    }
}

export function validarUrl(input){
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
export function validarGeneral(){
    let alerta = document.querySelector("#error")
    if(validarCodigo(codigo) && validarCamporequerido(producto) && validarCamporequerido(descripcion) && validarNumeros(cantidad) && validarUrl(url)){
        alerta.className = "alert alert-danger mt-4 d-none"
        return true;
    }else{
        console.log("corregir datos")
        alerta.className = "alert alert-danger mt-4"
        return false;
    }
    
}