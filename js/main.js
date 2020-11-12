const rotateArrow = () => {
  var arrow = document.getElementById("arrow");
  arrow.classList.contains("active")
    ? arrow.classList.remove("active")
    : arrow.classList.add("active");
};

document
  .querySelector("#rent-or-buy-toggle")
  .addEventListener("click", rotateArrow);
