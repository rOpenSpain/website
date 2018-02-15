// Send contact form by ajax and show success message
function netlifyContactForm() {
  var form = $('.netlify-contact-form');
  form.submit(function (e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      // Clear the form
      $this[0].reset();

      // Say everything was OK
      $('#contact-message')
        .html('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Cerrara</span></button>Gracias por ponerte en contacto. ¡Te contestaremos lo antes posible!</div>')
        .fadeIn();
    });
  });
}

// Wait until jQuery is loaded
function defer() {
  if (window.jQuery) {
    netlifyContactForm();
  } else {
    setTimeout(function() { defer() }, 500);
  }
}

defer();
