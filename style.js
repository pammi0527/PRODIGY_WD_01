window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "#000"; 
    } else {
      navbar.style.backgroundColor = "transparent"; 
    }
  });


  const menuItems = document.querySelectorAll(".nav-link");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("mouseenter", function () {
      this.style.color = "#d0b200"; 
    });
    menuItem.addEventListener("mouseleave", function () {
      this.style.color = "#323f4b"; 
    });
  });