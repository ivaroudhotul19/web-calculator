const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

function clear() {
  display.innerText = "";
}
function backspace() {
  let string = display.innerText.toString();
  display.innerText = string.substr(0, string.length - 1);
}
function operator() {
  display.innerText = eval(display.innerText);
}

buttons.forEach((target) => {
  target.onclick = () => {
    if (target.id == "clear") {
      clear();
    } else if (target.id == "backspace") {
      backspace();
    } else if (display.innerText != "" && target.id == "equal") {
      operator();
    } else if (display.innerText == "" && target.id == "equal") {
      display.innerText = "Empty!";
    } else {
      display.innerText += target.id;
    }
  };
});
