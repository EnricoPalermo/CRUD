import{validarCodigo, validarCamporequerido,validarNumeros,validarUrl,validarGeneral} from "./validaciones.js"
import{Producto} from "./productoClass.js";
// traer los input que quiero validar 

let codigo = document.querySelector("#codigo");
let cantidad = document.querySelector("#cantidad");
let url = document.querySelector("#url");
let producto = document.querySelector("#producto");
let descripcion = document.querySelector("#descripcion");
let formulario = document.querySelector("#formProducto");
let listaProductos = [];

cargaInicial()

// le agregamos un evento 

codigo.addEventListener("blur",() => {validarCodigo(codigo)});
cantidad.addEventListener("blur",() => {validarNumeros(cantidad)});
url.addEventListener("blur",()=> {validarUrl(url)});
producto.addEventListener("blur",() => {validarCamporequerido(producto)});
descripcion.addEventListener("blur",() => {validarCamporequerido(descripcion)});
formulario.addEventListener("submit", guardarProducto);


function guardarProducto(e){
    e.preventDefault();
    //verificar que se cumple todo
    if(validarGeneral()){
    agregarProducto()       
    }else{
        //no crear
        console.log("REVISAR")
    }
}
function agregarProducto(){
    let productoNuevo = new Producto(codigo.value,producto.value,descripcion.value,cantidad.value,url.value)
    console.log(productoNuevo)
    //cargar el producto dentro del arreglo
    listaProductos.push(productoNuevo)
    //al arreglo agregarlo al LocalStorage
    localStorage.setItem("arregloProductos",JSON.stringify(listaProductos))
    //limpiarformulario
    limpiarFormulario()
    //mostrar mensaje en una tabla

    // mostrar objeto en una tabla
}

function limpiarFormulario(){
    formulario.reset()
    codigo.className = "form-control"
}

function cargaInicial(){
    listaProductos = JSON.parse(localStorage.getItem("arregloProductos")) || []
}