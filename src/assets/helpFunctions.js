export const getReview = (reviews) => {
  let count = 0;
  let allReviews = reviews.map((review) => review.rating);
  allReviews.forEach((element) => {
    count += element;
  });
  return (count / reviews.length).toFixed(1);
};

export const getDiscount = (price, discountPercentage) => {
  const discount = (price * discountPercentage) / 100;
  return (price - discount).toFixed(2);
};

export const totalItemsCost = (cart) => {
  const totalItemsCost = cart.map(
    (item) =>
      (item.price - (item.price * item.discountPercentage) / 100) *
      item.countInCart
  );
  let total = 0;
  totalItemsCost.forEach((element) => {
    total += element;
  });
  return total.toFixed(2);
};


export const allCategories = (products) => {
  let filteredList = [];
  const allCategories = products.map((item) => item.category);
  return [...new Set(allCategories)];
};

export const productsFilter = (category, setCategory, products) => {
  setCategory([...products.filter((item) => item.category === category)]);
};