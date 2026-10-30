/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });

});


/* =========================
   PRODUCT FILTER
========================= */

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filters.forEach(filter => {

  filter.addEventListener("click", () => {

    filters.forEach(item => {
      item.classList.remove("active");
    });

    filter.classList.add("active");

    const category = filter.dataset.filter;

    products.forEach(product => {

      if (
        category === "all" ||
        product.dataset.category === category
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }

    });

  });

});


/* =========================
   CART
========================= */

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");
const cartPopup = document.getElementById("cartPopup");
const cartMessage = document.getElementById("cartMessage");

document.querySelectorAll(".quick-add").forEach(button => {

  button.addEventListener("click", () => {

    const productName = button.dataset.product;

    cartCount++;

    cartCounter.textContent = cartCount;

    cartMessage.textContent =
      `${productName} berhasil ditambahkan ke cart.`;

    cartPopup.classList.add("show");

  });

});


/* =========================
   CART POPUP
========================= */

document.getElementById("closeCart").addEventListener("click", () => {
  cartPopup.classList.remove("show");
});

document.getElementById("continueShopping").addEventListener("click", () => {
  cartPopup.classList.remove("show");
});

document.getElementById("cartButton").addEventListener("click", () => {

  cartMessage.textContent =
    cartCount > 0
      ? `Ada ${cartCount} produk di cart lo.`
      : "Cart lo masih kosong.";

  cartPopup.classList.add("show");

});


/* =========================
   NEWSLETTER
========================= */

document.getElementById("newsletterForm").addEventListener("submit", (event) => {

  event.preventDefault();

  alert("Thanks! Lo sudah masuk waiting list.");

  event.target.reset();

});
