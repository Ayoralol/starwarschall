const getData = async (setLoading, setData) => {
  // set loading screen
  setLoading(true);
  // get the data from all pages
  const pages = [1, 2, 3, 4];
  const fetches = pages.map((page) =>
    fetch(`https://swapi.dev/api/starships/?page=${page}`).then((response) =>
      response.json()
    )
  );
  const results = await Promise.all(fetches);
  // flatMap the results into one object array
  const combinedData = results.flatMap((result) => result.results);
  // add the number to the object from the URL
  const dataWithNumber = combinedData.map((item) => {
    const number = item.url.split("/")[5];
    return {number, ...item};
  });
  setData(dataWithNumber);
  setLoading(false);
};

export default getData;
