/* =========================================
   KHOTWA | خُطوة
   Main JavaScript
========================================= */

/* =========================================
   PRODUCTS
========================================= */

const products = [
  {
    id: 1,
    name: "حذاء رسمي أسود",
    category: "formal",
    categoryName: "أحذية رسمية",
    price: 54,
    oldPrice: 65,
    rating: 4.9,
    badge: "الأكثر مبيعًا",
    image: "https://cdn.shopify.com/s/files/1/0729/7394/3076/files/1VeronicaDerbyFormalLaceupShoes.jpg?v=1776429559",
    description: "حذاء رجالي رسمي أسود بتصميم كلاسيكي أنيق مناسب للعمل والمناسبات",
    features: [
      "تصميم رسمي أنيق",
      "مناسب للعمل والمناسبات",
      "نعل مريح للاستخدام اليومي"
    ]
  },

  {
    id: 2,
    name: "حذاء رسمي بني",
    category: "formal",
    categoryName: "أحذية رسمية",
    price: 58,
    oldPrice: 69,
    rating: 4.8,
    badge: "مميز",
    image: "https://thursdayboots.com/cdn/shop/files/1024x1024-Men-Chairman-Cinnamon-051323-3.4_1024x1024.jpg?v=1685970935",
    description: "حذاء رجالي رسمي بتصميم كلاسيكي يناسب البدلات والإطلالات الأنيقة",
    features: [
      "ستايل كلاسيكي",
      "مناسب للإطلالات الرسمية",
      "تصميم رجالي أنيق"
    ]
  },

  {
    id: 3,
    name: "سنيكرز رياضي أحمر",
    category: "sneakers",
    categoryName: "سنيكرز",
    price: 45,
    oldPrice: 55,
    rating: 4.9,
    badge: "جديد",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=90",
    description: "سنيكرز رياضي أحمر بتصميم عصري ومريح مناسب للاستخدام اليومي",
    features: [
      "تصميم رياضي",
      "خفيف ومريح",
      "مناسب للاستخدام اليومي"
    ]
  },

  {
    id: 4,
    name: "سنيكرز كاجوال",
    category: "sneakers",
    categoryName: "سنيكرز",
    price: 42,
    oldPrice: 50,
    rating: 4.7,
    badge: "عرض",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=90",
    description: "سنيكرز رجالي كاجوال بتصميم عصري مناسب للمشاوير والإطلالات اليومية",
    features: [
      "ستايل كاجوال",
      "تصميم عصري",
      "مناسب للمشاوير اليومية"
    ]
  },

  {
    id: 5,
    name: "لوفر جلد أسود",
    category: "loafers",
    categoryName: "لوفر",
    price: 52,
    oldPrice: 62,
    rating: 4.8,
    badge: "مميز",
    image: "https://www.perksstore.com/cdn/shop/files/19_202487d9-2d66-49a8-8ab4-645bc897188b.png?v=1755590539&width=2048",
    description: "حذاء لوفر رجالي بتصميم كلاسيكي يجمع بين الراحة والأناقة",
    features: [
      "تصميم لوفر",
      "سهل الارتداء",
      "مناسب للإطلالات الأنيقة"
    ]
  },

  {
    id: 6,
    name: "لوفر جلد بني",
    category: "loafers",
    categoryName: "لوفر",
    price: 49,
    oldPrice: 59,
    rating: 4.7,
    badge: "",
    image: "https://trumpetshoes.in/cdn/shop/files/1.jpg?v=1752686803",
    description: "لوفر رجالي أنيق بتصميم بسيط مناسب للعمل والخروجات اليومية",
    features: [
      "تصميم بسيط",
      "مريح وسهل الارتداء",
      "مناسب للعمل والخروجات"
    ]
  },

  {
    id: 7,
    name: "حذاء كاجوال بيج",
    category: "casual",
    categoryName: "كاجوال",
    price: 44,
    oldPrice: 53,
    rating: 4.8,
    badge: "الأكثر طلبًا",
    image: "https://www.altershops.gr/168800-product_default/kona-derby-mpez.jpg",
    description: "حذاء رجالي كاجوال بتصميم عملي يناسب الإطلالات اليومية المختلفة",
    features: [
      "ستايل يومي",
      "تصميم عملي",
      "مريح للمشي"
    ]
  },

  {
    id: 8,
    name: "حذاء كاجوال كحلي",
    category: "casual",
    categoryName: "كاجوال",
    price: 47,
    oldPrice: 56,
    rating: 4.6,
    badge: "",
    image: "https://cdn.weasy.io/users/aldoshoespt/catalog/pedro410002031_2.jpg",
    description: "حذاء رجالي بتصميم رياضي مريح مناسب للحركة والاستخدام اليومي",
    features: [
      "تصميم رياضي",
      "راحة أثناء الحركة",
      "مناسب للاستخدام اليومي"
    ]
  }
];


/* =========================================
   STATE
========================================= */

let activeFilter = "all";
let searchTerm = "";

let cart = loadStorage("khotwaCart", []);
let wishlist = loadStorage("khotwaWishlist", []);


/* =========================================
   ELEMENTS
========================================= */

const productsGrid = document.getElementById("productsGrid");
const noProducts = document.getElementById("noProducts");

const productSearch = document.getElementById("productSearch");
const mainSearch = document.getElementById("mainSearch");
const sortProducts = document.getElementById("sortProducts");

const filterButtons = document.querySelectorAll(".filter-btn");
const categoryCards = document.querySelectorAll(".category-card");
const promoButtons = document.querySelectorAll("[data-promo]");
const footerButtons = document.querySelectorAll("[data-footer]");

const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartItemsText = document.getElementById("cartItemsText");
const cartFooter = document.getElementById("cartFooter");
const cartSubtotal = document.getElementById("cartSubtotal");
const shippingCost = document.getElementById("shippingCost");
const cartTotal = document.getElementById("cartTotal");

const wishlistBtn = document.getElementById("wishlistBtn");
const wishlistCount = document.getElementById("wishlistCount");
const wishlistDrawer = document.getElementById("wishlistDrawer");
const wishlistOverlay = document.getElementById("wishlistOverlay");
const closeWishlist = document.getElementById("closeWishlist");
const wishlistItems = document.getElementById("wishlistItems");

const productModal = document.getElementById("productModal");
const productModalContent = document.getElementById("productModalContent");
const closeProductModal = document.getElementById("closeProductModal");

const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutModal = document.getElementById("closeCheckoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutTotal = document.getElementById("checkoutTotal");

const successModal = document.getElementById("successModal");
const closeSuccessModal = document.getElementById("closeSuccessModal");
const orderNumber = document.getElementById("orderNumber");

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");

const toastContainer = document.getElementById("toastContainer");

const mainHeader = document.getElementById("mainHeader");
const backToTop = document.getElementById("backToTop");
const currentYear = document.getElementById("currentYear");


/* =========================================
   STORAGE
========================================= */

function loadStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);

    if (!saved) {
      return fallback;
    }

    return JSON.parse(saved);
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
}


/* =========================================
   HELPERS
========================================= */

function money(value) {
  return `${Number(value).toFixed(2)} د.أ`;
}

function getProduct(id) {
  return products.find(product => product.id === Number(id));
}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts() {
  let result = [...products];

  if (activeFilter !== "all") {
    result = result.filter(
      product => product.category === activeFilter
    );
  }

  if (searchTerm.trim()) {
    const term = searchTerm.trim().toLowerCase();

    result = result.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.categoryName.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  }

  const sort = sortProducts.value;

  if (sort === "low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  productsGrid.innerHTML = "";

  if (!result.length) {
    noProducts.classList.add("show");
    return;
  }

  noProducts.classList.remove("show");

  result.forEach(product => {
    const favorite = wishlist.includes(product.id);

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        ${
          product.badge
            ? `<span class="product-badge">${product.badge}</span>`
            : ""
        }

        <button
          class="product-wishlist ${favorite ? "active" : ""}"
          data-wishlist="${product.id}"
          aria-label="المفضلة"
        >
          <i class="${favorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>

        <button
          class="quick-view"
          data-view="${product.id}"
        >
          عرض التفاصيل
        </button>

      </div>

      <div class="product-info">

        <span class="product-category">
          ${product.categoryName}
        </span>

        <h3>${product.name}</h3>

        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating}</span>
        </div>

        <div class="product-price-row">

          <div class="product-price">

            <strong>
              ${money(product.price)}
            </strong>

            ${
              product.oldPrice
                ? `<span class="old-price">${money(product.oldPrice)}</span>`
                : ""
            }

          </div>

          <button
            class="add-cart-btn"
            data-cart="${product.id}"
            aria-label="إضافة للسلة"
          >
            <i class="fa-solid fa-bag-shopping"></i>
          </button>

        </div>

      </div>
    `;

    productsGrid.appendChild(card);
  });
}


/* =========================================
   PRODUCT EVENTS
========================================= */

productsGrid.addEventListener("click", event => {
  const cartButton = event.target.closest("[data-cart]");
  const wishlistButton = event.target.closest("[data-wishlist]");
  const viewButton = event.target.closest("[data-view]");

  if (cartButton) {
    addToCart(Number(cartButton.dataset.cart));
  }

  if (wishlistButton) {
    toggleWishlist(Number(wishlistButton.dataset.wishlist));
  }

  if (viewButton) {
    openProduct(Number(viewButton.dataset.view));
  }
});


/* =========================================
   FILTER
========================================= */

function setFilter(category) {
  activeFilter = category;

  filterButtons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === category
    );
  });

  renderProducts();

  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    setFilter(card.dataset.category);
  });
});

promoButtons.forEach(button => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.promo);
  });
});

footerButtons.forEach(button => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.footer);
  });
});


/* =========================================
   SEARCH
========================================= */

productSearch.addEventListener("input", event => {
  searchTerm = event.target.value;

  mainSearch.value = searchTerm;

  renderProducts();
});

mainSearch.addEventListener("input", event => {
  searchTerm = event.target.value;

  productSearch.value = searchTerm;

  renderProducts();
});

mainSearch.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchPanel.classList.remove("open");

    document.getElementById("products").scrollIntoView({
      behavior: "smooth"
    });
  }
});

sortProducts.addEventListener("change", renderProducts);


/* =========================================
   SEARCH PANEL
========================================= */

searchToggle.addEventListener("click", () => {
  searchPanel.classList.toggle("open");

  if (searchPanel.classList.contains("open")) {
    setTimeout(() => {
      mainSearch.focus();
    }, 150);
  }
});

closeSearch.addEventListener("click", () => {
  searchPanel.classList.remove("open");
});


/* =========================================
   MOBILE MENU
========================================= */

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");

  const icon = menuToggle.querySelector("i");

  icon.className = mobileNav.classList.contains("open")
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});

mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");

    menuToggle.querySelector("i").className =
      "fa-solid fa-bars";
  });
});


/* =========================================
   CART
========================================= */

function addToCart(id) {
  const product = getProduct(id);

  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: id,
      quantity: 1
    });
  }

  saveStorage("khotwaCart", cart);

  updateCart();

  showToast(
    `تمت إضافة ${product.name} إلى السلة`,
    "success"
  );
}


function updateCart() {
  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  cartCount.textContent = totalQuantity;

  if (!cart.length) {
    cartItemsText.textContent = "السلة فارغة";

    cartItems.innerHTML = `
      <div class="empty-state">

        <i class="fa-solid fa-bag-shopping"></i>

        <h3>سلتك فارغة</h3>

        <p>
          اختر حذاءك وأضفه إلى السلة
        </p>

      </div>
    `;

    cartFooter.classList.remove("show");

    cartSubtotal.textContent = money(0);
    shippingCost.textContent = money(0);
    cartTotal.textContent = money(0);

    return;
  }

  cartItemsText.textContent =
    `${totalQuantity} منتج في السلة`;

  cartFooter.classList.add("show");

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const product = getProduct(item.id);

    if (!product) return;

    const row = document.createElement("div");

    row.className = "cart-item";

    row.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div>

        <h4>
          ${product.name}
        </h4>

        <div class="cart-item-price">
          ${money(product.price)}
        </div>

        <div class="quantity-control">

          <button data-decrease="${product.id}">
            <i class="fa-solid fa-minus"></i>
          </button>

          <span>
            ${item.quantity}
          </span>

          <button data-increase="${product.id}">
            <i class="fa-solid fa-plus"></i>
          </button>

        </div>

      </div>

      <button
        class="remove-item"
        data-remove-cart="${product.id}"
        aria-label="حذف"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    cartItems.appendChild(row);
  });

  updateTotals();
}


cartItems.addEventListener("click", event => {
  const increase =
    event.target.closest("[data-increase]");

  const decrease =
    event.target.closest("[data-decrease]");

  const remove =
    event.target.closest("[data-remove-cart]");

  if (increase) {
    changeQuantity(
      Number(increase.dataset.increase),
      1
    );
  }

  if (decrease) {
    changeQuantity(
      Number(decrease.dataset.decrease),
      -1
    );
  }

  if (remove) {
    removeFromCart(
      Number(remove.dataset.removeCart)
    );
  }
});


function changeQuantity(id, amount) {
  const item = cart.find(item => item.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== id);
  }

  saveStorage("khotwaCart", cart);

  updateCart();
}


function removeFromCart(id) {
  const product = getProduct(id);

  cart = cart.filter(item => item.id !== id);

  saveStorage("khotwaCart", cart);

  updateCart();

  if (product) {
    showToast(
      `تم حذف ${product.name} من السلة`
    );
  }
}


/* =========================================
   TOTALS
========================================= */

function calculateTotals() {
  const subtotal = cart.reduce(
    (sum, item) => {
      const product = getProduct(item.id);

      if (!product) {
        return sum;
      }

      return sum +
        product.price * item.quantity;
    },
    0
  );

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 75
        ? 0
        : 5;

  return {
    subtotal,
    shipping,
    total: subtotal + shipping
  };
}


function updateTotals() {
  const totals = calculateTotals();

  cartSubtotal.textContent =
    money(totals.subtotal);

  shippingCost.textContent =
    totals.shipping === 0
      ? "مجاني"
      : money(totals.shipping);

  cartTotal.textContent =
    money(totals.total);

  checkoutTotal.textContent =
    money(totals.total);
}


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(id) {
  const product = getProduct(id);

  if (!product) return;

  if (wishlist.includes(id)) {
    wishlist =
      wishlist.filter(productId => productId !== id);

    showToast(
      `تم حذف ${product.name} من المفضلة`
    );
  } else {
    wishlist.push(id);

    showToast(
      `تمت إضافة ${product.name} إلى المفضلة`,
      "success"
    );
  }

  saveStorage(
    "khotwaWishlist",
    wishlist
  );

  updateWishlist();
  renderProducts();
}


function updateWishlist() {
  wishlistCount.textContent =
    wishlist.length;

  if (!wishlist.length) {
    wishlistItems.innerHTML = `
      <div class="empty-state">

        <i class="fa-regular fa-heart"></i>

        <h3>
          المفضلة فارغة
        </h3>

        <p>
          احفظ الأحذية التي أعجبتك هنا
        </p>

      </div>
    `;

    return;
  }

  wishlistItems.innerHTML = "";

  wishlist.forEach(id => {
    const product = getProduct(id);

    if (!product) return;

    const row =
      document.createElement("div");

    row.className = "wishlist-item";

    row.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div>

        <h4>
          ${product.name}
        </h4>

        <div class="wishlist-item-price">
          ${money(product.price)}
        </div>

        <button
          class="wishlist-add-cart"
          data-wishlist-cart="${product.id}"
        >
          إضافة للسلة
        </button>

      </div>

      <button
        class="remove-item"
        data-remove-wishlist="${product.id}"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    wishlistItems.appendChild(row);
  });
}


wishlistItems.addEventListener("click", event => {
  const add =
    event.target.closest("[data-wishlist-cart]");

  const remove =
    event.target.closest("[data-remove-wishlist]");

  if (add) {
    addToCart(
      Number(add.dataset.wishlistCart)
    );
  }

  if (remove) {
    toggleWishlist(
      Number(remove.dataset.removeWishlist)
    );
  }
});


/* =========================================
   DRAWERS
========================================= */

function openCartDrawer() {
  closeWishlistDrawer();

  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");

  document.body.classList.add("no-scroll");
}


function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");

  unlockBody();
}


function openWishlistDrawer() {
  closeCartDrawer();

  wishlistDrawer.classList.add("open");
  wishlistOverlay.classList.add("open");

  document.body.classList.add("no-scroll");
}


function closeWishlistDrawer() {
  wishlistDrawer.classList.remove("open");
  wishlistOverlay.classList.remove("open");

  unlockBody();
}


cartBtn.addEventListener(
  "click",
  openCartDrawer
);

closeCart.addEventListener(
  "click",
  closeCartDrawer
);

cartOverlay.addEventListener(
  "click",
  closeCartDrawer
);

wishlistBtn.addEventListener(
  "click",
  openWishlistDrawer
);

closeWishlist.addEventListener(
  "click",
  closeWishlistDrawer
);

wishlistOverlay.addEventListener(
  "click",
  closeWishlistDrawer
);


/* =========================================
   PRODUCT MODAL
========================================= */

function openProduct(id) {
  const product = getProduct(id);

  if (!product) return;

  productModalContent.innerHTML = `
    <div class="modal-product-image">

      <img
        src="${product.image}"
        alt="${product.name}"
      >

    </div>

    <div class="modal-product-info">

      <span class="product-category">
        ${product.categoryName}
      </span>

      <h2>
        ${product.name}
      </h2>

      <div class="product-rating">
        <i class="fa-solid fa-star"></i>
        <span>${product.rating}</span>
      </div>

      <p class="modal-product-description">
        ${product.description}
      </p>

      <div class="modal-product-price">

        <strong>
          ${money(product.price)}
        </strong>

        ${
          product.oldPrice
            ? `<span class="old-price">${money(product.oldPrice)}</span>`
            : ""
        }

      </div>

      <ul class="modal-features">

        ${product.features.map(feature => `
          <li>
            <i class="fa-solid fa-circle-check"></i>
            ${feature}
          </li>
        `).join("")}

      </ul>

      <button
        class="modal-add-cart"
        data-modal-cart="${product.id}"
      >
        <i class="fa-solid fa-bag-shopping"></i>
        إضافة إلى السلة
      </button>

    </div>
  `;

  productModal.classList.add("open");

  document.body.classList.add("no-scroll");
}


productModalContent.addEventListener(
  "click",
  event => {
    const button =
      event.target.closest("[data-modal-cart]");

    if (button) {
      addToCart(
        Number(button.dataset.modalCart)
      );
    }
  }
);


function closeProduct() {
  productModal.classList.remove("open");

  unlockBody();
}


closeProductModal.addEventListener(
  "click",
  closeProduct
);


productModal.addEventListener(
  "click",
  event => {
    if (event.target === productModal) {
      closeProduct();
    }
  }
);


/* =========================================
   CHECKOUT
========================================= */

checkoutBtn.addEventListener("click", () => {
  if (!cart.length) {
    showToast(
      "السلة فارغة",
      "error"
    );

    return;
  }

  closeCartDrawer();

  checkoutTotal.textContent =
    money(calculateTotals().total);

  checkoutModal.classList.add("open");

  document.body.classList.add("no-scroll");
});


function closeCheckout() {
  checkoutModal.classList.remove("open");

  unlockBody();
}


closeCheckoutModal.addEventListener(
  "click",
  closeCheckout
);


checkoutModal.addEventListener(
  "click",
  event => {
    if (event.target === checkoutModal) {
      closeCheckout();
    }
  }
);


checkoutForm.addEventListener(
  "submit",
  event => {
    event.preventDefault();

    if (!cart.length) {
      showToast(
        "السلة فارغة",
        "error"
      );

      return;
    }

    const name =
      document
        .getElementById("customerName")
        .value
        .trim();

    const phone =
      document
        .getElementById("customerPhone")
        .value
        .trim();

    const address =
      document
        .getElementById("customerAddress")
        .value
        .trim();

    if (!name || !phone || !address) {
      showToast(
        "يرجى إدخال بيانات التوصيل المطلوبة",
        "error"
      );

      return;
    }

    const number =
      `KH-${Date.now().toString().slice(-7)}`;

    orderNumber.textContent =
      `رقم الطلب: ${number}`;

    cart = [];

    saveStorage(
      "khotwaCart",
      cart
    );

    updateCart();

    checkoutForm.reset();

    checkoutModal.classList.remove("open");

    successModal.classList.add("open");

    document.body.classList.add("no-scroll");
  }
);


/* =========================================
   SUCCESS
========================================= */

function closeSuccess() {
  successModal.classList.remove("open");

  unlockBody();
}


closeSuccessModal.addEventListener(
  "click",
  closeSuccess
);


successModal.addEventListener(
  "click",
  event => {
    if (event.target === successModal) {
      closeSuccess();
    }
  }
);


/* =========================================
   NEWSLETTER
========================================= */

newsletterForm.addEventListener(
  "submit",
  event => {
    event.preventDefault();

    const email =
      newsletterEmail.value.trim();

    if (!email) {
      showToast(
        "أدخل البريد الإلكتروني",
        "error"
      );

      return;
    }

    showToast(
      "تم الاشتراك في عروض خُطوة بنجاح",
      "success"
    );

    newsletterForm.reset();
  }
);


/* =========================================
   COUNTDOWN
========================================= */

function getOfferEnd() {
  const key = "khotwaOfferEnd";

  const saved =
    localStorage.getItem(key);

  if (saved) {
    const savedDate =
      new Date(saved);

    if (
      !Number.isNaN(savedDate.getTime()) &&
      savedDate.getTime() > Date.now()
    ) {
      return savedDate;
    }
  }

  const newDate =
    new Date();

  newDate.setDate(
    newDate.getDate() + 4
  );

  newDate.setHours(
    23,
    59,
    59,
    999
  );

  localStorage.setItem(
    key,
    newDate.toISOString()
  );

  return newDate;
}


let offerEnd = getOfferEnd();


function updateCountdown() {
  let difference =
    offerEnd.getTime() - Date.now();

  if (difference <= 0) {
    localStorage.removeItem(
      "khotwaOfferEnd"
    );

    offerEnd = getOfferEnd();

    difference =
      offerEnd.getTime() - Date.now();
  }

  const days =
    Math.floor(
      difference / 86400000
    );

  const hours =
    Math.floor(
      (difference / 3600000) % 24
    );

  const minutes =
    Math.floor(
      (difference / 60000) % 60
    );

  const seconds =
    Math.floor(
      (difference / 1000) % 60
    );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}


updateCountdown();


setInterval(
  updateCountdown,
  1000
);


/* =========================================
   TOAST
========================================= */

function showToast(message, type = "") {
  const toast =
    document.createElement("div");

  toast.className =
    `toast ${type}`;

  toast.textContent =
    message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}


/* =========================================
   BODY LOCK
========================================= */

function unlockBody() {
  const somethingOpen =
    cartDrawer.classList.contains("open") ||
    wishlistDrawer.classList.contains("open") ||
    productModal.classList.contains("open") ||
    checkoutModal.classList.contains("open") ||
    successModal.classList.contains("open");

  if (!somethingOpen) {
    document.body.classList.remove("no-scroll");
  }
}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
  "keydown",
  event => {
    if (event.key !== "Escape") {
      return;
    }

    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");

    wishlistDrawer.classList.remove("open");
    wishlistOverlay.classList.remove("open");

    productModal.classList.remove("open");
    checkoutModal.classList.remove("open");
    successModal.classList.remove("open");

    searchPanel.classList.remove("open");
    mobileNav.classList.remove("open");

    menuToggle.querySelector("i").className =
      "fa-solid fa-bars";

    document.body.classList.remove("no-scroll");
  }
);


/* =========================================
   HEADER + BACK TO TOP
========================================= */

window.addEventListener(
  "scroll",
  () => {
    mainHeader.classList.toggle(
      "scrolled",
      window.scrollY > 20
    );

    backToTop.classList.toggle(
      "show",
      window.scrollY > 500
    );
  }
);


backToTop.addEventListener(
  "click",
  () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);


/* =========================================
   SMOOTH LINKS
========================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {
    link.addEventListener(
      "click",
      event => {
        const href =
          link.getAttribute("href");

        if (
          !href ||
          href === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(href);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    );
  });


/* =========================================
   ACTIVE NAV
========================================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".desktop-nav a"
  );


function updateActiveNav() {
  let current = "home";

  sections.forEach(section => {
    if (
      window.scrollY >=
      section.offsetTop - 170
    ) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") ===
        `#${current}`
    );
  });
}


window.addEventListener(
  "scroll",
  updateActiveNav
);


/* =========================================
   YEAR
========================================= */

currentYear.textContent =
  new Date().getFullYear();


/* =========================================
   START
========================================= */

renderProducts();
updateCart();
updateWishlist();
updateActiveNav();