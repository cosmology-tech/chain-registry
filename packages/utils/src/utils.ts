export const customFind = <T>(
  array: T[],
  filterFn: (item: T) => boolean
): T | undefined => {
  const filteredItems = array.filter(filterFn);
  const filterCount = filteredItems.length;
  if (filterCount > 1) {
    throw new Error(`Ambiguity Error: ${filterCount} items found.`);
  }

  return filteredItems[0];
};
