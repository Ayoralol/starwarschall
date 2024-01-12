import Card from "../../components/Card/Card";
import styles from "./Grid.module.scss";

const Grid = ({sortedData}) => {
  return (
    <div className={styles.grid}>
      {sortedData.map((item, index) => {
        // this sets odd/even during the map
        const evenCheck = index % 2 === 0 ? true : false;
        return (
          <Card
            key={item.number}
            name={item.name}
            manufacturer={item.manufacturer}
            length={item.length}
            even={evenCheck}
          />
        );
      })}
    </div>
  );
};

export default Grid;
