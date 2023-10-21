function goToScreen(screenNumber) {
  // Ocultar todas as telas
  let screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  // Mostrar a tela desejada
  let screenToShow = document.getElementById("screen" + screenNumber);
  screenToShow.style.display = "block";
}

// Inicializar a primeira tela
goToScreen(1);
