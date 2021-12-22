
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let entry = count + " - "
    saveEl.textContent += entry
    countEl.textContent = 0
    count = 0
}

