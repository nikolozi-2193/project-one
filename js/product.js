const productsUl = document.getElementById("pm-products-ul");
const products = document.querySelectorAll(".top-prod-li");
const paginationDiv = document.getElementById("pagination");

// let hie = Array.from(products);

// let hi = hie.slice(0, 5);
// console.log(hi);

// display
function displayList(items, rows_per_page, page) {
  page--;

  let Arrayitems = Array.from(items);

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = Arrayitems.slice(start, end);

  for (let item of items) {
    item.classList.add("wrapped");
    let alreadyWrapped = document.querySelectorAll(".wrapped-active");
    for (let item of alreadyWrapped) {
      alreadyWrapped[item].remove();
    }
  }

  for (let i = 0; i < paginatedItems.length; i++) {
    productsUl.appendChild(paginatedItems[i]);
    paginatedItems[i].classList.add("wrapped-active");
  }
}
// wrapper
function wrapper(items, rows_per_page, page, wrapper) {
  let pages = items.length / rows_per_page;

  for (let i = 0; i < pages; i++) {
    let pageNum = `<a class="pg-nm" href="#">${i + 1}</a>`;
    let newLi = document.createElement("li");
    newLi.innerHTML = pageNum;
    wrapper.appendChild(newLi);
  }
  displayList(items, rows_per_page, page);
}

wrapper(products, 5, 2, paginationDiv);

const pageNums = document.querySelectorAll(".pg-nm");

for (let each of pageNums) {
  let innertxt = each.innerHTML;
  // console.log(innertxt);
}
