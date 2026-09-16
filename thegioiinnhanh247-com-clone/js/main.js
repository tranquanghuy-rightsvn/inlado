(function () {
  "use strict";

  var mq = window.matchMedia("(max-width: 1024px)");

  var panels = [
    { btn: document.querySelector(".mobile-menu-toggle"), panel: document.getElementById("primary-menu") },
    { btn: document.querySelector(".mobile-cat-toggle"), panel: document.getElementById("product-categories") }
  ].filter(function (p) { return p.btn && p.panel; });

  function close(p) {
    p.panel.classList.remove("is-open");
    p.btn.setAttribute("aria-expanded", "false");
  }

  panels.forEach(function (p) {
    p.btn.addEventListener("click", function () {
      var open = !p.panel.classList.contains("is-open");
      panels.forEach(close);
      if (open) {
        p.panel.classList.add("is-open");
        p.btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  mq.addEventListener("change", function (e) {
    if (!e.matches) panels.forEach(close);
  });

  document.querySelectorAll(".nav-main > li").forEach(function (li) {
    var subMenu = li.querySelector(".sub-menu");
    if (!subMenu) return;
    var link = li.querySelector(":scope > a");
    link.addEventListener("click", function (e) {
      if (mq.matches) {
        e.preventDefault();
        li.classList.toggle("open");
      }
    });
  });
})();
