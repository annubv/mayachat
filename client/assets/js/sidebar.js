const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".sidebar");

  burger.addEventListener("click", () => {
    nav.classList.toggle("sidebar-active");
    burger.classList.toggle("toggle");
  });
};

const profile_dropdown = () => {
  const dropdown_btn = document.querySelector("#profile-dropdown");
  const profile_details = document.querySelector(".profile-details");

  try {
    dropdown_btn.addEventListener("click", () => {
      profile_details.classList.toggle("hidden");
    });
  } catch {}
};

navSlide();
//profile_dropdown();
