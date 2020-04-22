module.exports = () => {
  const profile_dropdown_btn = document.querySelector(".profile-options");
  const profile_settings = document.querySelector(".profile-settings");

  try {
    profile_dropdown_btn.addEventListener("click", () => {
      profile_settings.classList.toggle("profile-settings-active");
    });
  } catch {}
};
