(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})({"./index.js":/*!******************!*\
  !*** ./index.js ***!
  \******************//*! no static exports found */function(a,b,c){var d=c(/*! ./js/panelSlide */'./js/panelSlide.js'),e=c(/*! ./js/profileDropdown */'./js/profileDropdown.js'),f=c(/*! ./js/chatScroll */'./js/chatScroll.js'),g=c(/*! ./js/addMsg */'./js/addMsg.js');d(),e(),f(),g()},"./js/addMsg.js":/*!**********************!*\
  !*** ./js/addMsg.js ***!
  \**********************//*! no static exports found */function(a,b,c){var d=c(/*! ./chatScroll */'./js/chatScroll.js');a.exports=function(){var a=document.querySelector('#send-btn'),b=document.querySelector('#chat-input');a.addEventListener('click',function(){var a=b.value;if(0<a.length){var c=document.createElement('div');c.classList.add('chat-content');var e=document.createElement('p');e.innerHTML=a;var f=document.createElement('div');f.classList.add('chat-content-msg'),f.appendChild(e);var g=document.createElement('p');g.innerHTML='Anubhav Singh',g.classList.add('chat-username');var h=document.createElement('p');h.innerHTML='22:05',h.classList.add('chat-time');var i=document.createElement('div');i.className='chat-header',i.appendChild(g),i.appendChild(h);var j=document.createElement('div');j.classList.add('chat-content-data'),j.appendChild(i),j.appendChild(f);var k=document.createElement('img');k.src='../images/user1.png',k.alt='user-dp',k.className='profile-pic';var l=document.createElement('div');l.className='user-dp',l.appendChild(k);var m=document.createElement('div');m.className='chat-content',m.appendChild(k),m.appendChild(j),chat_sections=document.getElementsByClassName('chat-section'),last_chat_section=chat_sections[chat_sections.length-1],last_chat_section.appendChild(m),b.value='',d()}})}},"./js/chatScroll.js":/*!**************************!*\
  !*** ./js/chatScroll.js ***!
  \**************************//*! no static exports found */function(a){a.exports=function(){var a=document.querySelector('#chat-wrapper');a.scrollTop=a.scrollHeight}},"./js/panelSlide.js":/*!**************************!*\
  !*** ./js/panelSlide.js ***!
  \**************************//*! no static exports found */function(a){a.exports=function(){var a=document.querySelector('.burger'),b=document.querySelector('.sidebar');a.addEventListener('click',function(){b.classList.toggle('sidebar-active'),a.classList.toggle('toggle')})}},"./js/profileDropdown.js":/*!*******************************!*\
  !*** ./js/profileDropdown.js ***!
  \*******************************//*! no static exports found */function(a){a.exports=function(){var a=document.querySelector('.profile-options'),b=document.querySelector('.profile-settings');try{a.addEventListener('click',function(){b.classList.toggle('profile-settings-active')})}catch(a){}}},"./sass/chat-content.scss":/*!********************************!*\
  !*** ./sass/chat-content.scss ***!
  \********************************//*! no static exports found */function(){},"./sass/nav.scss":/*!***********************!*\
  !*** ./sass/nav.scss ***!
  \***********************//*! no static exports found */function(){},"./sass/root.scss":/*!************************!*\
  !*** ./sass/root.scss ***!
  \************************//*! no static exports found */function(){},0:/*!**********************************************************************************!*\
  !*** multi ./index.js ./sass/root.scss ./sass/nav.scss ./sass/chat-content.scss ***!
  \**********************************************************************************//*! no static exports found */function(a,b,c){c(/*! ./index.js */'./index.js'),c(/*! ./sass/root.scss */'./sass/root.scss'),c(/*! ./sass/nav.scss */'./sass/nav.scss'),a.exports=c(/*! ./sass/chat-content.scss */'./sass/chat-content.scss')}});
//# sourceMappingURL=main.js.map