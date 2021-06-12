//cart show
document.getElementById("cart-info").addEventListener("click", () => {
    document.getElementById("cart").classList.toggle("show-cart")
})


//filter buttons
let filterAll = document.getElementById("filterAll")
let filterCakes = document.getElementById("filterCakes")
let filterCupcakes = document.getElementById("filterCupcakes")
let filterSweets = document.getElementById("filterSweets")
let filterDonut = document.getElementById("filterDonut")


// store items container
let items = document.getElementById("items");

function showFilteredItems(filter) {
    items.children
    for (let i = 0; i < items.children.length; i++) {
        items.children[i].classList.remove("d-none")
        if (items.children[i].dataset.type != filter && filter != "all") {
            items.children[i].classList.add("d-none")
        }
    }
}