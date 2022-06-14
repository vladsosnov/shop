let user = null;
let filter = [];
let filterByCategory = "Clothing & Shoes";
let sortType = "uselessFirst";
const shop = [
  {
    id: "0",
    imageName: "image-1.png",
    imageAlt: "typewriter",
    name: "Cat",
    description:
      "Vintage Typewriter to post awesome stories about UI design and webdev.",
    price: 49,
    caption: "Eligible for Shipping To Mars or somewhere else",
    category: "animals",
  },
  {
    id: "1",
    imageName: "image-2.png",
    imageAlt: "shoes",
    name: "Shoes",
    description:
      "Lee Pucker design. Leather shoes for handsome designers. Free shipping.",
    price: 13,
    caption: "1258 bids, 359 watchers",
    category: "vintage",
  },
  {
    id: "2",
    imageName: "image-3.png",
    imageAlt: "machine",
    name: "Machine",
    description:
      "Timesaving kitten to save months on development. Playful, cute, cheap!",
    price: 128,
    caption: "Eligible for nothing :(",
    category: "vintage",
  },
  {
    id: "3",
    imageName: "image-4.png",
    imageAlt: "plugs",
    name: "Plugs",
    description:
      "Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!",
    price: 12,
    caption: "Worldwide shitting available Buyers protection possible!",
    category: "toys-entertainment",
  },
];
let shopLayoutVariant = "list";
let cart = [];
let cartRecommendation = null;
let searchValue = "";
let previewArticleId = "";
const mainShopList = document.getElementById("main-shop-list");
const filtersItems = [
  { category: null, label: "Clothing & Shoes", imageName: "entertainment.svg" },
  { category: "animals", label: "Animals", imageName: "music.svg" },
  { category: null, label: "Music", imageName: "sport.svg" },
  { category: null, label: "Sport & Lifestyle", imageName: "sport.svg" },
  { category: null, label: "Kitchen Accessories", imageName: "kitchen.svg" },
  { category: null, label: "Travel Equipment", imageName: "travel.svg" },
  { category: null, label: "Growing & Garden", imageName: "garden.svg" },
  { category: null, label: "Electrical Tools", imageName: "electrical.svg" },
  { category: null, label: "Mother Care", imageName: "mother-care.svg" },
  {
    category: "toys-entertainment",
    label: "Toys & Entertainment",
    imageName: "toys.svg",
  },
  { category: "vintage", label: "Vintage", imageName: "vintage.svg" },
];

const openCustomDialog = (dialogId, closeButtonId) => {
  const dialog = document.getElementById(dialogId);
  const closeButton = document.getElementById(closeButtonId);

  dialog.style.display = "block";

  closeButton.onclick = () => {
    dialog.innerHTML = "";
    dialog.style.display = "none";
  };
};

const changeLayoutView = (type) => {
  const mainList = document.getElementsByClassName("main-list")[0];
  const mainListCards = document.getElementsByClassName("mainListCard");
  const cardViewLayoutBtn =
    document.getElementsByClassName("cardViewLayoutBtn")[0];
  const listViewLayoutBtn =
    document.getElementsByClassName("listViewLayoutBtn")[0];

  if (type === "list") {
    mainList.style["flex-direction"] = "column";
    listViewLayoutBtn.classList.add("main-sort__btn--active");
    cardViewLayoutBtn.classList.remove("main-sort__btn--active");

    for (let i = 0; i < mainListCards.length; i++) {
      mainListCards[i].style.width = "100%";
      mainListCards[i].style["max-width"] = "100%";
    }
  } else {
    mainList.style["flex-direction"] = "row";
    listViewLayoutBtn.classList.remove("main-sort__btn--active");
    cardViewLayoutBtn.classList.add("main-sort__btn--active");

    for (let i = 0; i < mainListCards.length; i++) {
      mainListCards[i].style.width = "initial";
      mainListCards[i].style["max-width"] = "260px";
    }
  }
};

const handleFilterClick = (filterName) => {
  document
    .getElementsByClassName(filterName)[0]
    .classList.toggle("filter-aside__dropdown--active");
};

const handleFilterCheckbox = (value) => {
  filter.push(value);
  console.log("filter = ", filter);
};

const handleSearchType = (event) => {
  searchValue = event.target.value;
};

const handleClearSearchInput = () => {
  document.getElementsByClassName("header-search__input")[0].value = "";
  searchValue = "";
};

const handleSignInSubmit = (event) => {
  event.preventDefault();
  const email = document.getElementsByClassName("signInFormEmail")[0];
  const password = document.getElementsByClassName("signInFormPassword")[0];

  return {
    email: email.value,
    password: password.value,
  };
};

const handleCreateOrder = () => {
  const cart = document.getElementsByClassName("cart-body__description");
  console.log("cart", cart);

  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
  }
};

const handleSortChange = (event) => {
  sortType = event.target.value;
  shop.sort((a, b) => a.price - b.price);

  switch (sortType) {
    case "uselessFirst":
      shop.sort((a, b) => a.price - b.price);
      break;
    case "uselessLast":
      shop.sort((a, b) => b.price - a.price);
      break;
    case "date":
      console.log("do later");
      break;
  }

  mainShopList.innerHTML = "";
  generateDynamicCards();
};

const generateDynamicCards = () => {
  const filteredShop = filter.length
    ? shop.filter((article) => filter.includes(article.category))
    : shop;

  if (!filteredShop.length) {
    const emptyState = document.createElement("div");
    emptyState.innerHTML = `
      <div>
        We can't find any products with this selected filters
      </div>
    `;
    mainShopList.appendChild(emptyState);

    return;
  }

  filteredShop.forEach((article) => {
    const articleHtml = `<li class="card mainListCard">
      <img src="src/assets/img/shop-items/${article.imageName}" alt="${article.imageAlt}">
      <p class="card-description">${article.description}</p>
      <p class="card-price">$${article.price}</p>
      <p class="card-caption">${article.caption}</p>
      <div class="card-btns-wrap">
        <button class="card-control-btn addToCartFromList">
          <img src="src/assets/icons/add.svg" alt="add">
          Add to cart
        </button>
        <button id=${article.id} class="card-control-btn watchArticleFromList">
          <img src="src/assets/icons/watch.svg" alt="watch">
          Watch
        </button>
      </div>
    </li>
    `;

    const articleDiv = document.createElement("div");
    articleDiv.style.display = "flex";
    articleDiv.innerHTML = articleHtml;
    mainShopList.appendChild(articleDiv);
  });
};

generateDynamicCards();

const generatePreviewDialog = (id) => {
  const article = shop.find((item) => item.id === id);
  const previewDialog = document.getElementById("preview-dialog");
  const previewDialogHtml = `
      <div class="preview dialog-content">
      <div class="dialog-head">
        <h4 class="dialog-head__title">Preview</h4>
        <button class="dialog-head__close-btn" id="close-preview-dialog">
          <img src="src/assets/icons/close-modal.svg" alt="close modal">
        </button>
        <hr class="dialog-head__line">
      </div>

      <img src="src/assets/img/shop-items/${article.imageName}" alt="${article.imageAlt}" class="preview-image" />

      <div class="preview-body">
        <div class="preview-body__description">
          <h5 class="description-name">${article.name}</h5>
          <p class="description-text">
            ${article.description}
          </p>
          <p class="description-price">$${article.price}</p>
        </div>
        <button class="preview-body__btn addToCartFromList">
          <img src="src/assets/icons/add.svg" alt="add" class="icon">
          Add to cart
        </button>
      </div>
    </div>
  `;

  const previewDiv = document.createElement("span");
  previewDiv.innerHTML = previewDialogHtml;
  previewDialog.appendChild(previewDiv);
};

const generateFilterList = () => {
  const filterList = document.getElementById("filter-list");

  filtersItems.forEach((filter) => {
    const filterItem = `
      <li>
          <button data-filtercategory="${filter.category}" class="filter-list__item" onclick="handleFilterCategoryClick(event)">
            <img src="src/assets/icons/${filter.imageName}" alt="${filter.imageName}" class="item-icon">
            <p class="item-title">${filter.label}</p>
          </button>
        </li>
      `;

    const filterDiv = document.createElement("div");
    filterDiv.innerHTML = filterItem;
    filterList.appendChild(filterDiv);
  });
};

generateFilterList();

const handleFilterCategoryClick = (event) => {
  const filterType = event.target.dataset.filtercategory;
  event.target.classList.toggle("filter-list__item--active");

  if (!filter.includes(filterType)) {
    filter.push(filterType);
  } else if (filterType !== "null") {
    filter = filter.filter((type) => type !== filterType);
  }

  mainShopList.innerHTML = "";
  generateDynamicCards();
};

document.getElementById("open-sign-in-dialog").onclick = () => {
  return openCustomDialog("sign-in-dialog", "close-sign-in-dialog");
};

document.getElementById("open-sign-up-dialog").onclick = () => {
  return openCustomDialog("sign-up-dialog", "close-sign-up-dialog");
};

const previewDialogs = document.getElementsByClassName("watchArticleFromList");
for (let i = 0; i < previewDialogs.length; i++) {
  previewDialogs[i].onclick = () => {
    generatePreviewDialog(previewDialogs[i].id);
    return openCustomDialog("preview-dialog", "close-preview-dialog");
  };
}

const addToCartFromList = document.getElementsByClassName("addToCartFromList");
for (let i = 0; i < addToCartFromList.length; i++) {
  addToCartFromList[i].onclick = () => {
    console.log(addToCartFromList[i]);
  };
}

document.getElementById("open-cart-dialog").onclick = () => {
  return openCustomDialog("cart-dialog", "close-cart-dialog");
};
