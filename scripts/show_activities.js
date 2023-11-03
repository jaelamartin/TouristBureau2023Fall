console.log("Hello")
console.log(categories[0])
for (i = 0; i < categories.length; i++) {
    console.log(categories[i])
    cat.innerHTML += `<option>${categories[i]}</option>`



}
function showActiveis(e) {
    act.innerHTML=""
    for (i = 0; i < activities.length; i++) {
        if (e.target.value == activities[i].category) {

            act.innerHTML += `<option> ${activities[i].name} </option>`
        }
    }
}




cat.onchange = showActiveis
function showExtra(e) {
    extra.innerHTML = ''
    for (i = 0; i < activities.length; i++) {
        if (activities[i].id == e.target.value) {
            extra.innerHTML = `
            price${activities[i].price}
        `
        }
    }


}
act.onchange = showExtra

if (activities[i].price > 0) {
    buy.style.display = "block"


}

change = showExtra
