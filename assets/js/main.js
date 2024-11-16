document.getElementById('copy-email').addEventListener('click', function () {
    const email = "tuemail@ejemplo.com"; // Reemplaza con tu email
  
    // Copiar el email al portapapeles
    navigator.clipboard.writeText(email)
      .then(() => {
        const message = document.getElementById('copy-message');
        message.style.display = 'inline'; // Muestra el mensaje
        setTimeout(() => {
          message.style.display = 'none'; // Oculta el mensaje después de 2 segundos
        }, 2000);
      })
      .catch(err => {
        console.error('Error al copiar el email: ', err);
      });
  });
  