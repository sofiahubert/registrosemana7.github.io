function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
document.addEventListener('DOMContentLoaded', function () {
    const regBtn = document.getElementById('regBtn');
    regBtn.addEventListener('click', function () {
      const password1 = document.getElementById('password1').value;
      const password2 = document.getElementById('password2').value;
  
      if (password1 !== password2) {
        alert("Las contraseñas no coinciden. Por favor, ingrésalas nuevamente.");
      }
    });
  
    // Resto del código de validación
  });
  function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var terminos = document.getElementById("terminos").checked;
  
    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "" || !terminos) {
      showAlertError();
      return false; // Evita que el formulario se envíe si algún campo está vacío o no se aceptaron términos
    }
  
    if (password1.length < 6) {
      showAlertError();
      return false; // Evita que el formulario se envíe si la contraseña tiene menos de 6 caracteres
    }
  
    if (password1 !== password2) {
      showAlertError();
      return false; // Evita que el formulario se envíe si las contraseñas no coinciden
    }
  
    showAlertSuccess(); // Llama a la función en caso de éxito
    return true; // Permite el envío del formulario si todo está correcto
  }
  