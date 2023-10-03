(function() {
    "use strict";

    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })

    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)

    const textToType = "Desenvolvedora Full-Stack";
    const typingTextElement = document.getElementById("typing-text");
    
    let charIndex = 0;
    
    function typeText() {
        if (charIndex < textToType.length) {
            typingTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50); // Tempo em milissegundos entre cada letra
        }
    }
    
    typeText();
    

})();
