const container = document.querySelector('.container');

// Creating function to make blocks
function makeRows(dimension) {
  for (let c = 0; c < dimension*dimension; c++){
    cell = document.createElement('div');
    cell.className = 'grid-item';
    container.appendChild(cell);
  }
}
makeRows(16);

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  items.forEach(item => item.classList.remove('hover'))
  dimensions = prompt('How many dimensions you want?')
  console.log(dimensions)
})

const items = document.querySelectorAll('.grid-item');
items.forEach(item => item.addEventListener('mouseover', function(e) {
  this.classList.add('hover')
}))

