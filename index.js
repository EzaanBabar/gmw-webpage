function contact(event) {
  event.preventDefault();
  console.log('it worked');

  const loaderElement = document.querySelector('.loader');

  // Show loading animation when button is clicked
  loaderElement.classList.add('loader');

  emailjs
    .sendForm(
      "service_6f1x8ok",
      "template_u8xizu9",
      event.target,
      "N0r57Sx2So5TaMWOC"
    )
    .then(() => {
      console.log('this worked1');
      changeButtonText(event, "Success!", "#00ff00");

      // Hide loading animation on success
      loaderElement.classList.remove('loader');
    })
    .catch((error) => {
      console.error('API error:', error);
      changeButtonText(event, "Temporarily Unavailable", "#ff0000");

      // Hide loading animation on error
      loaderElement.classList.remove('loader');
    });
}


function changeButtonText(event, newText, newColor) {
  const submitButton = document.getElementById('contact__submit');
  submitButton.innerText = 'Sending...'; 
  emailjs
    .sendForm(
      "service_w3t6fwh",
      "template_8pnippi",
      event.target,
      "umdlF8Lz3b_JPu_Wb"
    )
    .then(() => {
      submitButton.classList.remove('loading');
      submitButton.innerText = newText;
      submitButton.style.color = newColor;
      submitButton.disabled = true;
    })
    .catch((error) => {
      submitButton.classList.remove('loading');
      submitButton.innerText = newText;
      submitButton.style.color = newColor;
    });
}
