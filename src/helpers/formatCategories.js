import categories from '../../config/categories';

export const formatCategories = (category) => {
  const matchingCatgeory = categories.find((item) => item.value === category);
  return matchingCatgeory.name;
};

export const formatBookClubCstegories = (category) => {
  if (category.length === 1) {
    let categoryName = '';
    category.forEach((cat) => {
      const matchingCatgeory = categories.find((item) => item.value === cat);
      categoryName = matchingCatgeory.name;
    });
    return categoryName;
  }

  if (category.length > 1) {
    let categoryName = '';
    category.forEach((cat, index) => {
      const currentIndex = index + 1; // this is done because the index of an array starts from 0
      categories.find((item) => {
        if (item.value === cat && currentIndex < category.length) {
          return (categoryName += `${item.name}, `);
        }
        if (item.value === cat && currentIndex === category.length) {
          return (categoryName += `${item.name}`);
        }
        return;
      });
    });
    return categoryName;
  }
};
