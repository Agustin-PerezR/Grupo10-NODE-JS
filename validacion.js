function validarFormulario(event) {
    event.preventDefault();
    document.querySelector('input[type="submit"]').disabled = false;

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var opciones = document.getElementById('opciones').value;
    var terminos = document.getElementById('terminos').checked;

    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
  
    if(password !== confirm_password) {
      alert('Las contraseñas no coinciden.');
      document.querySelector('input[type="submit"]').disabled = true;
      return false;
    }
  
    if(nombre === '' || email === '' || mensaje === '' || opciones === '' || !terminos) {
      alert('Por favor, completa todos los campos.');
      return false;
    }
    return true;
  }
 
  function validarLogin(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Usuario y contraseña predefinidos
    var emailCorrecto = 'user@a';
    var passwordCorrecta = '123';
  
    if(email === '' || password === '') {
      alert('Por favor, ingresa tu email y contraseña.');
      return false;
    } else if(email !== emailCorrecto || password !== passwordCorrecta) {
      alert('El el email o la contraseña son incorrectos.');
      return false;
    } else {
      // Redireccionar a la página de bienvenida si el usuario y contraseña son correctos
      window.location.href = 'home.html';
    }
  }