function mobile() {
  let menuShow = document.querySelector(".list-menu-mobile");
  if (menuShow.classList.contains("open")) {
    menuShow.classList.remove("open");
    document.querySelector(".icon").src = "./img/abre.svg";
  } else {
    menuShow.classList.add("open");
    document.querySelector(".icon").src = "./img/fecha.svg";
  }
}
