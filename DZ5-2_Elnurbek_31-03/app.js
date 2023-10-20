const counterElement = document.getElementById('counter')
const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')
function incrementCounter() {
    const currentValue = parseInt(counterElement.value, 10)
    counterElement.value = currentValue + 1
}
function decrementCounter() {
    const currentValue = parseInt(counterElement.value, 10)
    counterElement.value = currentValue - 1
}
incrementButton.addEventListener('click', incrementCounter)
decrementButton.addEventListener('click', decrementCounter)
