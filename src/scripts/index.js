let user = null;
let filter = [];
let filterByCategory = "Clothing & Shoes";
let sortType = "uselessFirst";
let shop = null;
let shopLayoutVariant = "list";
let cart = null;
let cartRecommendation = null;
let searchValue = "";
let previewArticleId = "";

const openCustomDialog = (dialogId, closeButtonId) => {
  const dialog = document.getElementById(dialogId);
  const closeButton = document.getElementById(closeButtonId);

  dialog.style.display = "block";

  closeButton.onclick = () => {
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
};

const filters = document.getElementsByClassName("filter-list__item");
for (let i = 0; i < filters.length; i++) {
  filters[i].onclick = () => {
    filters[i].classList.toggle("filter-list__item--active");
  };
}

document.getElementById("open-sign-in-dialog").onclick = () => {
  return openCustomDialog("sign-in-dialog", "close-sign-in-dialog");
};

document.getElementById("open-sign-up-dialog").onclick = () => {
  return openCustomDialog("sign-up-dialog", "close-sign-up-dialog");
};

const previewDialogs = document.getElementsByClassName("watchArticleFromList");
for (let i = 0; i < previewDialogs.length; i++) {
  previewDialogs[i].onclick = () => {
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
