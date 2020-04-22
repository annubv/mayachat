module.exports = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".sidebar");

  burger.addEventListener("click", () => {
    nav.classList.toggle("sidebar-active");
    burger.classList.toggle("toggle");
  });
};
