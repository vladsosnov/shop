let user = null;
let filter = null;
let filterByCategory = "Clothing & Shoes";
let sort = "Useless first";
let shop = null;
let shopLayoutVariant = "list";
let cart = null;
let cartRecommendation = null;
let searchValue = "";
let previewArticleId = "";

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
