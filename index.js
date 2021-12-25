
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")

let count = 0
let sum = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let entry = count + " - "
    saveEl.textContent += entry
    sum += count
    sumEl.textContent = "Sum: " + sum
    countEl.textContent = 0
    count = 0
}

