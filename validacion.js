function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var opciones = document.getElementById('opciones').value;
    var terminos = document.getElementById('terminos').checked;

    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
  
    if(password !== confirm_password) {
      alert('Las contraseñas no coinciden.');
      return false;
    }
  
    if(nombre === '' || email === '' || mensaje === '' || opciones === '' || !terminos) {
      alert('Por favor, completa todos los campos.');
      return false;
    }
    return true;
  }
 
  function validarLogin() {
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
  
    // Usuario y contraseña predefinidos
    var usuarioCorrecto = 'user';
    var passwordCorrecta = '123';
  
    if(usuario === '' || password === '') {
      alert('Por favor, ingresa tu usuario y contraseña.');
      return false;
    } else if(usuario !== usuarioCorrecto || password !== passwordCorrecta) {
      alert('El usuario o la contraseña son incorrectos.');
      return false;
    } else {
      // Redireccionar a la página de bienvenida si el usuario y contraseña son correctos
      window.location.href = 'home.html';
      return true;
    }
  }
  
