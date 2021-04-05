"strict mode";
const submitBtn = document.querySelector(".submit-btn");
const formContainer = document.querySelector(".subscription-form");
const emailInput = document.querySelector(".email-input");
const iconError = document.querySelector(".icon-error");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-subscription");
const closeModalBtn = document.querySelector(".close-modal");

function closeModal() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}
function showModal() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function ValidateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

submitBtn.addEventListener("click", function (e) {
  // Reset default values
  e.preventDefault();
  let alertMessage = document.querySelector(".error-message");
  if (alertMessage) {
    alertMessage.remove();
    iconError.classList.add("hidden");
    emailInput.classList.remove("error");
  }
  // Valid Email  -> Display Modal
  if (ValidateEmail(emailInput.value)) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    showModal();
    emailInput.value = "";
    emailInput.blur();
  } else {
    // Invalid Email -> Display Error message, SetTimeOut for obvious alert if user's email is wrong again
    setTimeout(function () {
      iconError.classList.remove("hidden");
      emailInput.classList.add("error");
      formContainer.insertAdjacentHTML(
        "afterend",
        "<p class='error-message'>Please provide a valid email</p>"
      );
    }, 100);
  }
});

//Close modal options
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
