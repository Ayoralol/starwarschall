import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import styles from "./Header.module.scss";

const Header = ({onSearch, onSort}) => {
  const handleDefault = () => {
    onSort("default");
  };
  const handleAZ = () => {
    onSort("az");
  };
  const handleZA = () => {
    onSort("za");
  };
  const handleShort = () => {
    onSort("short");
  };
  const handleLong = () => {
    onSort("long");
  };
  return (
    <div className={styles.head}>
      <SearchBar onSearch={onSearch} />
      <Button onClick={handleDefault}>Sort Default</Button>
      <Button onClick={handleAZ}>Sort A-Z</Button>
      <Button onClick={handleZA}>Sort Z-A</Button>
      <Button onClick={handleShort}>Sort Length Short</Button>
      <Button onClick={handleLong}>Sort Length Long</Button>
    </div>
  );
};

export default Header;
