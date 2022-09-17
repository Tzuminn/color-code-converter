const sliders = document.querySelector(".sliders");
const hex = document.querySelector(".hex");

let newhex = "";
let hexArr = ["00", "00", "00"];

sliders.addEventListener("input", function (event) {
  let target = event.target;
  let inputValue = target.value;
  let valueNum = target.parentElement.children[2];
  valueNum.textContent = inputValue;

  if (target.classList.contains("red-slider")) {
    if (target.value < 16) {
      hexArr[0] = "0" + Number(target.value).toString(16);
    } else {
      hexArr[0] = Number(target.value).toString(16);
    }
  } else if (target.classList.contains("green-slider")) {
    if (target.value < 16) {
      hexArr[1] = "0" + Number(target.value).toString(16);
    } else {
      hexArr[1] = Number(target.value).toString(16);
    }
  } else {
    if (target.value < 16) {
      hexArr[2] = "0" + Number(target.value).toString(16);
    } else {
      hexArr[2] = Number(target.value).toString(16);
    }
  }
  newhex = "#" + hexArr[0] + hexArr[1] + hexArr[2];
  hex.textContent = newhex;
  document.body.style.backgroundColor = hex.textContent;
});
