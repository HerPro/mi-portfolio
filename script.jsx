let menuVisible = false;
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = " ";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}
function seleccionar() {
  document.getElementById("nav").classList = " ";
  menuVisible = false;
}
document.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    const cable = document.getElementById("cable");
    const bulb = document.getElementById("bulb");

    const rect = footer.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Si el footer está en la vista, animar el cable y el foco
        cable.style.height = "200px";
        bulb.style.opacity = "1";
    } else {
        // Reiniciar animación
        cable.style.height = "100px";
        bulb.style.opacity = "0";
    }
});
document.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    const cable = document.getElementById("cable");
    const bulb = document.getElementById("bulb");
    const gear = document.getElementById("gear");

    const rect = footer.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Si el footer está en la vista, animar el cable y el foco
        cable.style.height = "200px";
        bulb.style.opacity = "1";
    } else {
        // Reiniciar animación
        cable.style.height = "0";
        bulb.style.opacity = "0";
    }

    // Girar el engranaje basado en el scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    gear.style.transform = `rotate(${scrollTop}deg)`;
});

