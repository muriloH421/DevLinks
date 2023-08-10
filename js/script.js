var toggleMode = () => {
  const html = document.documentElement;

  html.classList.toggle("ligth");

  const isligth = html.classList.contains("ligth");
  const srcValue =
isligth
? "../img/perfil.jpg"
: "../img/perfil.jpg"
  const altValue =
  isligth
   ? "imagem de perfil com um avatar na cor preto"
   : "imagem de perfil com avatar na cor vermelha"

document.querySelector("#profile img")
.setAttribute("src",srcValue)
}