function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
    
    window.addEventListener("scroll", function () {
      const button = document.getElementById("back-to-top");
      if (window.scrollY > 300) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });

    document.getElementById("back-to-top").addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });