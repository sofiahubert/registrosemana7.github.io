function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

regBtn.addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;
  
    if (nombre === '' || apellido === '' || email === '' || password1 === '' || password2 === '' || !terminos) {
      showAlertError();
    } else if (password1 !== password2) {
      showAlertError();
    } else {
      showAlertSuccess(); // Llama a la función showAlertSuccess() si todo está correcto
    }
  });
  