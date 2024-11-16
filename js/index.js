
// Evento para detectar el cambio de tamaño de la ventana
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    if (width <= 480) {
        console.log("Estás usando un dispositivo móvil");
    } else if (width <= 768) {
        console.log("Estás usando una tableta");
    } else if (width <= 1200) {
        console.log("Estás usando una computadora de escritorio");
    } else {
        console.log("Estás usando una pantalla grande");
    }
});

// Llamada inicial al cargar la página
window.dispatchEvent(new Event('resize'));


/* este script maneja el dropdown del menú de navegación */

document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  var dropdownItems = dropdownMenu ? dropdownMenu.querySelectorAll('li') : []; // Verificar si dropdownMenu existe antes de buscar elementos

  if (!dropdownToggle || !dropdownMenu) {
      console.error('Dropdown elements not found');
      return;
  }

  dropdownToggle.addEventListener('click', function() {
      console.log('Dropdown toggle clicked');
      dropdownMenu.classList.toggle('show'); // Usar clases en lugar de estilos inline
  });

  dropdownItems.forEach(function(item) {
      item.addEventListener('click', function() {
          console.log('Dropdown item clicked');
          dropdownMenu.classList.remove('show'); // Usar clases en lugar de estilos inline
      });
  });
});


/* este script maneja el menú de navegación fijo */


window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var videoSection = document.getElementById('video');
  var videoHeight = videoSection ? videoSection.offsetHeight : 0; // Verificar si videoSection existe antes de obtener su altura

  if (window.scrollY >= videoHeight) {
      navbar.classList.add('fixed-top');
  } else {
      navbar.classList.remove('fixed-top');
  }
});


document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video_inicial');
    video.classList.add('zoom');
});


document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('video_inicial');
  if (video) {
      video.classList.add('zoom-animation');
  }
});


/* este script maneja el carrusel de productos */

$(document).ready(function(){
    $('#myCarousel').carousel({
      interval: 1800, // Intervalo de tiempo en milisegundos
      ride: 'carousel'
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video-container-t');
    if (video) {
        video.playbackRate =552.0; // Cambia el valor a la velocidad deseada
    }
});

$(document).ready(function() {
    $('#emailForm').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: '/send_email',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#response').html(response);
            },
            error: function(xhr, status, error) {
                $('#response').html('Error al enviar el correo: ' + error);
            }
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    
    try {
        const response = await fetch('/send_email', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        document.getElementById('messageContent').innerText = data.message;
        document.getElementById('messageBox').style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
    }
});

function closeMessageBox() {
    document.getElementById('messageBox').style.display = 'none';
    // Limpiar los inputs del formulario de contacto
    document.getElementById('contactForm').reset();
}

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('contactForm').reset();
});


function showMessageBox(message) {
    document.getElementById('messageContent').innerText = message;
    document.getElementById('messageBox').style.display = 'block';
}

function closeMessageBox() {
    document.getElementById('messageBox').style.display = 'none';
}