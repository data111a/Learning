let count = 0
let countEl = document.getElementById('count_el')
function increment() {
    count +=  1
    console.log('button was clicked')
    countEl.textContent = count
}
let saveEl = document.getElementById('save_el')
function save(){
    saveEl.textContent +=' - ' +  count
    console.log(count)
    count = 0
    countEl.textContent = count
}
