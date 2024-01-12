import styles from "./SearchBar.module.scss";

const SearchBar = ({onSearch}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => onSearch(event.target.value)}
        className={styles.search}
      />
    </form>
  );
};

export default SearchBar;
