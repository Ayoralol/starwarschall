const filterSort = (data, searchTerm, sortState) => {
  // filter the data based on the search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // sort the data based on the sort state
  let sortedData = [...filteredData];
  if (sortState) {
    sortedData.sort((a, b) => {
      const aLength = Number(a.length.replace(",", ""));
      const bLength = Number(b.length.replace(",", ""));
      return aLength - bLength;
    });
  } else {
    sortedData.sort((a, b) => a.number - b.number);
  }
  return sortedData;
};

export default filterSort;
