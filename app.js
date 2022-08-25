const $d = document.querySelector.bind(document);
const $$d = document.querySelectorAll.bind(document);

// Handle input on navbar
const input = $d(".nav-input");
const resetInputBtn = $d(".reset-input-btn");

input.addEventListener("keyup", function (e) {
  if (e.target.value) resetInputBtn.classList.remove("hidden");
  else resetInputBtn.classList.add("hidden");
});

function resetInput() {
  input.value = "";
  resetInputBtn.classList.add("hidden");
}

//Handle on scroll event
window.onscroll = () => {
  if (
    document.body.scrollTop > 420 ||
    document.documentElement.scrollTop > 420
  ) {
    $d(".main-nav").classList.add("menu-scrolled");
    $d(".btn-register-online").classList.add("btn-register-scrolled");
  } else {
    $d(".main-nav").classList.remove("menu-scrolled");
    $d(".btn-register-online").classList.remove("btn-register-scrolled");
  }
};
