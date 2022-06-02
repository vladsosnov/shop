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

const categories = [];

const categoryOptions = () => {
  // if (!categories) return [] as any;

  return categories.map((category) => {
    if (category) {
      return { label: category?.name, value: category?.id };
    }
  });
};

console.log("categoryOptions", categoryOptions());
