// Spinner About
var spinnerAbout = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 2000);
};
spinnerAbout();

//   POST WHATSAPP MESSAGE CONTENT

function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const mobileNumber = document.getElementById('phone').value;
    const phoneNumber = '+27765627755';

    const whatsappMessage = `Astin Owen | ZA: Enquiry%0A%0AName: ${name}%0APhone: ${mobileNumber}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    window.location.href = whatsappURL;
  }