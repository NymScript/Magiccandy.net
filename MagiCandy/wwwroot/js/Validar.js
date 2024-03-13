function validarFormulario() {
    var nameInput = document.getElementById('nameInput');
    var phoneInput = document.getElementById('phoneInput');
    var emailInput = document.getElementById('emailInput');
    var cedulaInput = document.getElementById('Cedula');
    var passwordInput = document.getElementById('passwordInput');
    var errorContainer = document.getElementById('error-container'); // Cambio de id

    var namePattern = /^[A-Za-z\s]+$/; // Letras y espacios
    var phonePattern = /^\d{10}$/; // 10 d�gitos exactamente
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(co|com|hotmail)$/; // Formato de email
    var cedulaPattern = /^\d{7,10}$/; // De 7 a 10 d�gitos
    var passwordPattern = /^\S+$/; // Sin espacios

    errorContainer.textContent = ""; // Limpiamos cualquier mensaje de error previo

    if (!namePattern.test(nameInput.value)) {
        errorContainer.textContent = "El nombre solo puede contener letras y espacios.";
        return false;
    }

    if (!phonePattern.test(phoneInput.value)) {
        errorContainer.textContent = "El n�mero de tel�fono debe tener 10 d�gitos.";
        return false;
    }

    if (!emailPattern.test(emailInput.value)) {
        errorContainer.textContent = "Por favor, ingresa un email v�lido (.co, .com, .hotmail).";
        return false;
    }

    if (!cedulaPattern.test(cedulaInput.value)) {
        errorContainer.textContent = "La c�dula debe tener entre 7 y 10 d�gitos.";
        return false;
    }

    if (!passwordPattern.test(passwordInput.value)) {
        errorContainer.textContent = "La contrase�a no puede contener espacios.";
        return false;
    }

    return true;
}
// INICIAR SESION

function iniciarSesion() {
    var lsapInput = document.getElementById('lsap');
    var lpassInput = document.getElementById('lpass');
    var errorMessage = document.getElementById('error-message');

    var lsapPattern = /^[0-9]{7,10}$/; // 10 d�gitos exactamente
    var lpassPattern = /^[\S]{8,}$/; // Al menos 8 caracteres y sin espacios

    errorMessage.textContent = ""; // Limpiamos cualquier mensaje de error previo

    if (!lsapPattern.test(lsapInput.value)) {
        errorMessage.textContent = "Por favor, ingresa un n�mero de identificaci�n v�lido.";
        return false; // Evitamos el env�o del formulario
    }

    if (!lpassPattern.test(lpassInput.value)) {
        errorMessage.textContent = "La contrase�a debe tener al menos 8 caracteres.";
        return false; // Evitamos el env�o del formulario
    }

    return true; // El formulario se enviar� si todas las validaciones son exitosas
}