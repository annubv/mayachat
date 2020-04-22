const chatScroll = require("./chatScroll");

module.exports = () => {
  const send_btn = document.querySelector("#send-btn");
  const msg_input = document.querySelector("#chat-input");
  send_btn.addEventListener("click", () => {
    let msg = msg_input.value;

    if (msg.length > 0) {
      let new_chatcontent_div = document.createElement("div");
      new_chatcontent_div.classList.add("chat-content");

      //create p
      let chat_p = document.createElement("p");
      chat_p.innerHTML = msg;

      //create div class="chat-content-msg
      let chat_content_msg = document.createElement("div");
      chat_content_msg.classList.add("chat-content-msg");
      chat_content_msg.appendChild(chat_p);

      //create p class="chat-username
      let p_uname = document.createElement("p");
      p_uname.innerHTML = "Anubhav Singh";
      p_uname.classList.add("chat-username");

      //create p class="chat-time
      let p_time = document.createElement("p");
      p_time.innerHTML = "22:05";
      p_time.classList.add("chat-time");

      //create chat header
      let chat_header = document.createElement("div");
      chat_header.className = "chat-header";
      chat_header.appendChild(p_uname);
      chat_header.appendChild(p_time);

      //create div class="chat-content-data
      let chat_content_data = document.createElement("div");
      chat_content_data.classList.add("chat-content-data");
      chat_content_data.appendChild(chat_header);
      chat_content_data.appendChild(chat_content_msg);

      //create img
      let user_dp = document.createElement("img");
      user_dp.src = "../images/user1.png";
      user_dp.alt = "user-dp";
      user_dp.className = "profile-pic";

      //div class="user-dp"
      let div_user_dp = document.createElement("div");
      div_user_dp.className = "user-dp";
      div_user_dp.appendChild(user_dp);

      //create chat content
      let chat_content_div = document.createElement("div");
      chat_content_div.className = "chat-content";
      chat_content_div.appendChild(user_dp);
      chat_content_div.appendChild(chat_content_data);

      chat_sections = document.getElementsByClassName("chat-section");
      last_chat_section = chat_sections[chat_sections.length - 1];
      last_chat_section.appendChild(chat_content_div);
      msg_input.value = "";
      chatScroll();
    }
  });
};
