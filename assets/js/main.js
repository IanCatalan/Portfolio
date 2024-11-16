document.getElementById('copy-email').addEventListener('click', function () {
    const email = "iancatalan07@gmail.com"
    
    navigator.clipboard.writeText(email)
      .then(() => {
        const popover = new bootstrap.Popover(this);
        popover.show()
        setTimeout(() => {
          popover.hide()
        }, 1500)
      })
      .catch(err => {
        console.error('Error al copiar el email:', err);
      })
  })

document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })

