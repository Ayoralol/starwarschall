import {useEffect, useState} from "react";
import styles from "./App.module.scss";
import Header from "./containers/Header/Header";
import Grid from "./containers/Grid/Grid";
import getData from "./functions/getData";
import filterSort from "./functions/filterSort";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortState, setSortState] = useState(false);
  const [loading, setLoading] = useState(false);

  //Get all data on page load
  useEffect(() => {
    getData(setLoading, setData);
  }, []);

  // handle the search term
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleSort = () => {
    setSortState(!sortState);
  };

  const sortedData = filterSort(data, searchTerm, sortState);

  return (
    <div className={styles.root}>
      <Header
        onSearch={handleSearch}
        onSort={handleSort}
        buttonLabel={sortState ? "Default Sort" : "Sort by Length"}
      />
      {loading ? (
        <p className={styles.loading}>Loading Ship Data...</p>
      ) : (
        <Grid sortedData={sortedData} />
      )}
    </div>
  );
}

export default App;
