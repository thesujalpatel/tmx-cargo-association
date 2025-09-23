document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#menu-btn");
  const collapsibleNav = document.querySelector(".collapsible-nav-wrapper");

  let menuOpen = false;

  button.addEventListener("click", function () {
    if (menuOpen) {
      collapsibleNav.style.height = collapsibleNav.scrollHeight + "px";
      collapsibleNav.style.overflow = "hidden";
      document.body.style.overflow = "visible";
      setTimeout(function () {
        collapsibleNav.style.height = "0px";
      }, 1);
    } else {
      collapsibleNav.style.height = collapsibleNav.scrollHeight + "px";
      document.body.style.overflow = "hidden";
      setTimeout(function () {
        if (menuOpen) {
          collapsibleNav.style.height = "auto";
          collapsibleNav.style.overflow = "visible";
        }
      }, 300);
    }
    menuOpen = !menuOpen;
  });

  // Handle clicks outside the menu
  document.addEventListener("click", function (event) {
    if (
      menuOpen &&
      !collapsibleNav.contains(event.target) &&
      !button.contains(event.target)
    ) {
      collapsibleNav.style.height = collapsibleNav.scrollHeight + "px";
      collapsibleNav.style.overflow = "hidden";
      document.body.style.overflow = "visible";
      setTimeout(function () {
        collapsibleNav.style.height = "0px";
      }, 1);
      menuOpen = false;
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (menuOpen) {
      window.innerWidth <= 1280
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "visible");
    }
  });
});
