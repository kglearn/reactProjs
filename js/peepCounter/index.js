// 

let countEl = document.getElementById("count-el")
let entriesEl = document.getElementById("entries-el")

function increment() {
    countEl.textContent = parseInt(countEl.textContent) + 1
}

function save() {
    entriesEl.textContent += countEl.textContent + " - " 
    countEl.textContent = 0
}

