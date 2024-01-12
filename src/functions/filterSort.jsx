const filterSort = (data, searchTerm, sortState) => {
  // filter the data based on the search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // sort the data based on the sort state
  let sortedData = [...filteredData];
  if (sortState === "default") sortedData.sort((a, b) => a.number - b.number);
  if (sortState === "az")
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  if (sortState === "za")
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
  if (sortState === "short") {
    sortedData.sort((a, b) => {
      const aLength = Number(a.length.replace(",", ""));
      const bLength = Number(b.length.replace(",", ""));
      return aLength - bLength;
    });
  }
  if (sortState === "long") {
    sortedData.sort((a, b) => {
      const aLength = Number(a.length.replace(",", ""));
      const bLength = Number(b.length.replace(",", ""));
      return bLength - aLength;
    });
  }
  return sortedData;
};

export default filterSort;
