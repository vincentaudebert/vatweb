const getFromSlug = (collection, slug) => {
  const foundItem = collection.filter(item => item.name === slug);
  if (foundItem.length === 0) return false;
  return foundItem[0];
};

const getActiveItem = collection => {
  const foundItem = collection.filter(item => item.active === true);
  if (foundItem.length === 0) return false;
  return foundItem[0];
};

export { getFromSlug, getActiveItem };
