/* 
TODO:
rainbow functionality
color selection functionality
size grid functionality */
class Grid {
  constructor(container) {
    this._container = container;
    this.clear();
  }

  /* Clears grid of color */
  clear() {
    this._container.textContent = "";
  }

  /* Creates the grid to specified size */
  createGrid(number) {
    this._container.style.display = "grid";
    this._container.style.gridTemplateColumns = `repeat(${number}, minmax(auto,auto))`;
    this._container.style.gridTemplateRows = `repeat(${number}, minmax(auto,auto))`;
    this._container.style.height = "500px";
  }

  /* If container does not have children nodes */
  /* Appends a grid square to the container */
  /* grid square changes color on hover */
  appendGrid(number, color) {
    const area = number * number;

    if (!this._container.hasChildNodes()) {
      for (let i = 0; i < area; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.addEventListener("mouseover", () => {
          gridSquare.style.backgroundColor = color;
        });
        this._container.appendChild(gridSquare);
      }
    } else {
      this.clear();
    }
  }
}

const container = document.querySelector("#container");
const standardBtn = document.querySelector("#standard");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
const standardGrid = new Grid(container);

/* creates grid with standard color change*/
standardBtn.addEventListener("click", () => {
  standardGrid.createGrid(10);
  standardGrid.appendGrid(10, "red");
});

/* clears grid */
clearBtn.addEventListener("click", () => {
  standardGrid.clear();
});
