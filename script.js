const changeColorButton = document.getElementById("chng-color-btn");
const changeShapeButton = document.getElementById("chng-shape-btn");

const color = ["red", "blue", "green", "brown", "pink", "gray"];

const GetRendomNumber = (max) => {
  return Math.floor((Math.random() * 10) % max) + 0;
};

changeColorButton.addEventListener("click", () => {
  const index = GetRendomNumber(color.length);
  document.getElementById("container").style.backgroundColor = color[index];
});

let flag = true;

changeShapeButton.addEventListener("click", () => {
  const container = document.getElementById("container");
  const newDiv = document.createElement("div");
  if (flag == true) newDiv.classList.add("red-square");
  else newDiv.classList.add("red-triangle");
  flag = !flag;
  container.innerHTML = "";
  container.appendChild(newDiv);
});
