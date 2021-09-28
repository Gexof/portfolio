let span = document.querySelector(".up");

window.onscroll = function () {
  //   console.log(this.scrollY);
  if (this.scrollY >= 500) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ham = document.getElementById("ham");
const navUL = document.getElementById("nav-ul");

ham.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
