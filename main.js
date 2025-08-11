document.getElementById('btnLogin').onclick = function(e) {
 //document.getElementById('btnLogin') busca el documento con el id btnLogin (el enlace del icono)
 //.onclick = function(e) asigna una funcion para que se ejecute cuando se haga click
 // (e)---> es el objeto evento que contiene informacion del clik (PROFE)   
  e.preventDefault();
  //evita que el enlace recargue la pagina al hacer clik (PROFE)
  document.getElementById('modalLogin').style.display = 'block';
 //busca el modal por su id (modalLogin) (PROFE)
 //cambia su estilos display a block, hacinedo que aparesca en pantalla(PROFE)
}// Cerrar modal
document.querySelector('.close').onclick = function() {
 //busca el primer elemnto con clase (.close, el boton ---->x)
 //.onclick = function()-->asigna una funcion para ejecutarse al hacer clik(PROFE CUAL ES LA FUNCION?)
 document.getElementById('modalLogin').style.display = 'none';
//Oculta el modal cambiando display a none (PROFE)
}// Cerrar si se hace clic fuera del modal
window.onclick = function(e) {
//Asigna una función que se ejecuta si se hace clic en cualquier parte de la ventana.
//e es el evento del clic.
  if (e.target == document.getElementById('modalLogin')) {
  //e.target → Elemento exacto donde se hizo clic. (PROFE)
  //Compara si el clic fue sobre el fondo oscuro (modalLogin) y no sobre la caja blanca.(PROFE)
    document.getElementById('modalLogin').style.display = 'none';
  //Si el clic fue en el fondo, se oculta el modal.(PORFE PORQUE NO UN ELSE?)
  }
}
////////////////////////////////////////////////////////////////////////////////////
const usuarioRegistrado = {
  email: "pepe@gmail.com",
  password: "123456"
};

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que la página se recargue

  const email = document.getElementById("correo").value;
  const password = document.getElementById("pin").value;

  // Validar datos
  if (email === usuarioRegistrado.email && password === usuarioRegistrado.password) {
    alert("✅ Ingreso exitoso");
  } else {
    alert("❌ Correo o contraseña incorrectos");
  }
});