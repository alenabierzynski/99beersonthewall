const bottleWords = document.querySelectorAll('.bottle-word')
const bottles = document.querySelectorAll('.bottle')
const counters = document.querySelectorAll('.counter')
let remainingBottles = 99

function drink(){
  if(confirm('Take one down, pass it around?')){
  this.classList.add('drank')
  remainingBottles --
  counters.forEach(counter => counter.textContent = remainingBottles)
  const word = remainingBottles === 1 ? 'bottle' : 'bottles'
}
}

bottles.forEach(bottle => bottle.addEventListener('click', drink))
