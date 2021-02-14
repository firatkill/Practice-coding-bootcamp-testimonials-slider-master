const buttons = document.getElementById("buttons");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const tanyapage = document.getElementById("tanya");
const johnpage = document.getElementById("john");

buttons.addEventListener("click", run);
function run() {
  if (johnpage.classList.value.includes("hide")) {
    showjohn();
  } else if (tanyapage.classList.value.includes("hide")) {
    showtanya();
  }
}

function showjohn() {
  tanyapage.classList.add("hide");
  johnpage.classList.remove("hide");
}

function showtanya() {
  johnpage.classList.add("hide");
  tanyapage.classList.remove("hide");
}
