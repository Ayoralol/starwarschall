import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import styles from "./Header.module.scss";

const Header = ({onSearch, onSort, buttonLabel}) => {
  return (
    <div className={styles.head}>
      <SearchBar onSearch={onSearch} />
      <Button onClick={onSort}>{buttonLabel}</Button>
    </div>
  );
};

export default Header;
