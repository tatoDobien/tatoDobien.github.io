window.addEventListener('load', () => {
  let button = document.querySelector('.chat-button');
  if (button) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      // funcionalidad del boton
      const targetSection = document.getElementById('seccion-5');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ocultar el boton flotante
  document.addEventListener('scroll', function() {
    const chatButton = document.querySelector(".chat-button");
    const footer = document.querySelector(".footer-bottom");
    if (chatButton && footer) {
      const footerRect = footer.getBoundingClientRect();
      if (footerRect.top < window.innerHeight && footerRect.bottom >= 0) {
        chatButton.classList.add("hidden");
      } else {
        chatButton.classList.remove("hidden");
      }
    }
  });
  

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-btn');
  const mobileLinks = mobileMenu.querySelectorAll('a'); 

  if (hamburger && mobileMenu && closeBtn) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });

    // cierra el menú al hacer clic en cualquier cosa
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });

    // cierra el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
      }
    });
  }

  // formulario
  const form = document.getElementById('info-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          alert('¡Gracias por tu mensaje!'); 
        } else {
          alert('Hubo un problema con el envío del formulario. Por favor, intentalo de nuevo.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con el envío del formulario. Por favor, intentalo de nuevo.');
      });
    });
  }
});
