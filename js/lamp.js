let lampBtn = document.querySelector(`#lamp`);
let mainNode = document.querySelector(`#main`);
let searchBlockNode = document.querySelector(`.searc_off`);

lampBtn.addEventListener("click", function () {
  if (mainNode.classList.contains("off_Noactive")) {
    mainNode.classList.remove("off_Noactive");
    searchBlockNode.classList.remove("off_Noactive");
  } else {
    mainNode.classList.add("off_Noactive");
    searchBlockNode.classList.add("off_Noactive");
  }
});
