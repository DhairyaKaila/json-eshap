// localStorage.clear("bagItem");
let bagItem;
onLoad();
function onLoad() {
  bagItem = JSON.parse(localStorage.getItem("bagItem")) || [];
  if (bagItem.length != 0) {
    document.querySelector(".empty-title").classList.remove("show");
    document.querySelector(".empty-title").classList.add("hidden");
    displayProduct();
  } else {
    document.querySelector("main").classList.add("hidden");
    document.querySelector(".empty-title").classList.remove("hidden");
    document.querySelector(".empty-title").classList.add("show");
  }
}

function displayProduct() {
  let items_container = document.querySelector(".items-container");
  let inhtml = "";
  let totalPrice=0;
  let totalOff=0;
  products.forEach((products) => {
    let ind = bagItem.indexOf(products.id);
    if (ind != -1) {
        totalPrice = totalPrice + products.price;
        totalOff = totalOff + products.off;
      inhtml += `<div class="item-container">
                    <div class="img-section">
                        <img
                            src="${products.image}"
                            alt>
                    </div>
                    <div class="detail-section">
                        <h1>${products.name}</h1>
                        <p>${products.t_type}</p>
                        <div>
                            <span class="price">₹${products.price}</span>
                            <span class="review">${products.ratings.rate} ⭐ | ${products.ratings.review}</span>
                        </div>
                        <h3>off: ₹${products.off}</h3>
                        <button onClick="removeToBag(${products.id})">Remove To Bag</button>
                    </div>
                </div>`;
    }
  });
  items_container.innerHTML = inhtml;
  document.getElementById("subtotal-price").innerText = `₹${totalPrice}`;
  document.getElementById("total-off-price").innerText = `₹${totalOff}`;
  document.getElementById("total-price").innerText = `₹${totalPrice-totalOff}`;
}

function removeToBag(id) {
  console.log(bagItem);
  let index = bagItem.indexOf(id);
  bagItem.splice(index, 1);
  console.log(bagItem);
  localStorage.setItem("bagItem", JSON.stringify(bagItem));
  if (bagItem.length != 0) {
    document.querySelector(".empty-title").classList.remove("show");
    document.querySelector(".empty-title").classList.add("hidden");
    displayProduct();
  } else {
    
    document.querySelector("main").classList.add("hidden");
    document.querySelector(".empty-title").classList.remove("hidden");
    document.querySelector(".empty-title").classList.add("show");
  }
}
