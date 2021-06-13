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
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

function showFilteredItems(filter) {
    for (let i = 0; i < items.children.length; i++) {
        items.children[i].classList.add("d-none")
        if (items.children[i].dataset.type == filter || filter == "all") {
            items.children[i].classList.remove("d-none")
        }
    }
}

function searchInItems(target) {
    if (target.trim() != "") {
        for (let i = 0; i < items.children.length; i++) {
            items.children[i].classList.add("d-none")
            if (items.children[i].innerText.includes(target.trim())) {
                items.children[i].classList.remove("d-none")
            }
        }
    }
}

searchBtn.addEventListener("click", searchInItems(searchInput.value))