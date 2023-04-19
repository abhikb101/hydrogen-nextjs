// sort by date
export const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) => new Date(b.date && b.date) - new Date(a.date && a.date)
  );
  return sortedArray;
};

// sort product by weight
export const sortByWeight = (array) => {
  const withWeight = array.filter((item) => item.weight);
  const withoutWeight = array.filter((item) => !item.weight);
  const sortedWeightedArray = withWeight.sort((a, b) => a.weight - b.weight);
  const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
  return sortedArray;
};
