// localStorage.clear("bagItem");
let bagItem = [];
let count_bag_item = document.getElementById("count-bag-item");
onLoad();
function onLoad() {
  if (localStorage.getItem("bagItem")) {
    bagItem = JSON.parse(localStorage.getItem("bagItem"));
  } else {
    bagItem = [];
  }
  if(bagItem.length == 0){
    count_bag_item.style.visibility = "hidden";
  }
  else{
    count_bag_item.innerText = bagItem.length;
    count_bag_item.style.visibility = "visible";
  }
  displayProduct();
}

function inpresent(id) {
  for (let i = 0; i < bagItem.length; i++) {
    if (bagItem[i] == id) {
      return true;
    }
  }
}

function displayProduct() {
  let items_container = document.querySelector(".items-container");
  let inhtml = "";

  products.forEach((products) => {
    let addOrNot = inpresent(products.id) ? "Remove to Bag" : "Add to Bag";
    inhtml += `<div class="main-box">
                    <div class="item-container">
                        <div>
                            <img
                                src="${products.image}"
                                alt="image" srcset>
                        </div>
                        <div class="product-detail">
                            <h1 class="name">${products.name}</h1>
                            <p class="type">${products.t_type}</p>
                            <div>
                            <span class="price">Rs. 899</span>
                            <span>${products.ratings.rate} ⭐ | ${products.ratings.review}</span>
                            </div>
                            <div class="btn-div">
                                <button id="add-bag" onClick="addBagOrRemove(${products.id})">${addOrNot}</button>
                            </div>
                        </div>
                    </div>
                </div>`;
  });
  items_container.innerHTML = inhtml;
}

function addBagOrRemove(id) {
  if (inpresent(id)) {
    ind = bagItem.indexOf(id);
    bagItem.splice(ind, 1);
    localStorage.setItem("bagItem", JSON.stringify(bagItem));
  } else {
    bagItem.push(id);
    localStorage.setItem("bagItem", JSON.stringify(bagItem));
  }
  if(bagItem.length == 0){
    count_bag_item.style.visibility = "hidden";
  }
  else{
    count_bag_item.innerText = bagItem.length;
    count_bag_item.style.visibility = "visible";
  }
  displayProduct();
}
