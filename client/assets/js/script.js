const panelSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".sidebar");

  burger.addEventListener("click", () => {
    nav.classList.toggle("sidebar-active");
    burger.classList.toggle("toggle");
  });
};

const profile_dropdown = () => {
  const profile_dropdown_btn = document.querySelector(".profile-options");
  const profile_settings = document.querySelector(".profile-settings");

  try {
    profile_dropdown_btn.addEventListener("click", () => {
      profile_settings.classList.toggle("profile-settings-active");
    });
  } catch {}
};

const chat_scroll_tobottom = () => {
  const chat_box = document.querySelector("#chat-wrapper");
  chat_box.scrollTop = chat_box.scrollHeight;
};

const add_msg = () => {
  const send_btn = document.querySelector("#send-btn");
  const msg_input = document.querySelector("#chat-input");
  send_btn.addEventListener("click", () => {
    let msg = msg_input.value;

    if (msg.length > 0) {
      let new_chatcontent_div = document.createElement("div");
      new_chatcontent_div.classList.add("chat-content");
      let new_msg =
        '<div class="chat-content"><div class="user-dp"><img class="profile-pic" src="../images/user1.png" alt="user-dp" /></div><div class="chat-content-data"><div class="chat-header"><p class="chat-username">Anubhav Singh</p><p class="chat-time">21:46</p></div><div class="chat-content-msg"><p>' +
        msg +
        "</p></div></div></div>";
      new_chatcontent_div.innerHTML = new_msg;
      chat_sections = document.getElementsByClassName("chat-section");
      last_chat_section = chat_sections[chat_sections.length - 1];
      last_chat_section.appendChild(new_chatcontent_div);
      msg_input.value = "";
      chat_scroll_tobottom();
    }
  });
};

panelSlide();
profile_dropdown();
chat_scroll_tobottom();
add_msg();
