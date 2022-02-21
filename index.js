const container = document.querySelector('.container');

let defaultDimensions = 16;
let dimensions = defaultDimensions;

// const dimensionBtn = document.querySelector('.squares');
// dimensionBtn.addEventListener('click', function (){
//   userDimensions = parseInt(prompt('How many dimensions do you want?'));
//   dimensions = userDimensions

// })

// Creating function to make blocks
function makeRows(dimension) {
  for (let c = 0; c < dimension*dimension; c++){
    cell = document.createElement('div');
    cell.className = 'grid-item';
    container.appendChild(cell);
  }
}

makeRows(dimensions);

const items = document.querySelectorAll('.grid-item');
items.forEach(item => item.addEventListener('mouseover', function() {
  this.classList.add('hover')
}))
userDimensions = 0
const btn = document.querySelector('.clear');
btn.addEventListener('click', function(){
  items.forEach(item => item.classList.remove('hover'))
  userDimensions = parseInt(prompt('How many dimensions do you want?'));
  dimensions = userDimensions
  // dimensions = prompt('How many dimensions you want?')
  // I'll finish you later
})

let heightAndWidth = 400/dimensions;
const grids = document.querySelectorAll('.grid-item');
grids.forEach(grid => grid.style.cssText = `height: ${heightAndWidth}px; width: ${heightAndWidth}px`)