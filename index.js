const container = document.querySelector(".container");

const defaultDimensions = 16;

// function to make blocks
function makeGrids(dimension) {
  for (let i = 0; i < dimension * dimension; i++) {
    cell = document.createElement("div");
    cell.className = "grid-item";
    container.appendChild(cell);
  }

  let heightAndWidth = 400 / dimension;
  const grids = document.querySelectorAll(".grid-item");
  grids.forEach(
    (grid) =>
      (grid.style.cssText = `height: ${heightAndWidth}px; width: ${heightAndWidth}px`)
  );

  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) =>
    item.addEventListener("mouseover", function () {
      this.classList.add("hover");
    })
  );
}

// function to clear grids
function clearGrids() {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => item.classList.remove("hover"));
}

// function to clear container
function clearContainer() {
  const grids = document.querySelectorAll(".grid-item");
  grids.forEach((grid) => grid.remove());
}

// function to add grids
function addGrids() {
  const userDimensions = parseInt(prompt("How many dimensions do you want?"));
  if (userDimensions > 0) {
    clearContainer();
    makeGrids(userDimensions);
  }
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearGrids);

const dimensionBtn = document.querySelector(".squares");
dimensionBtn.addEventListener("click", addGrids);

makeGrids(defaultDimensions);
