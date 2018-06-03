// @flow
/* eslint-disable import/prefer-default-export */
const getFromSlug = (collection: Array<Object>, slug: string) => {
  const foundItem = collection.filter(item => item.name === slug);
  if (foundItem.length === 0) return false;
  return foundItem[0];
};

export { getFromSlug };
