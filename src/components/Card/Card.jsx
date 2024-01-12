import styles from "./Card.module.scss";

const Card = ({name, manufacturer, length, even}) => {
  // sets className based on even or odd from parent
  let oddEven = even ? styles.dark_blue : styles.light_blue;

  return (
    <div className={`${styles.card} ${oddEven}`}>
      <h2 className={styles.head}>{name}</h2>
      <div className={styles.cont}>
        <p className={styles.p}>Made By:</p>
        <p className={styles.p}>{manufacturer}</p>
      </div>
      <div className={styles.cont}>
        <p className={styles.p}>Length:</p>
        <p className={styles.p}>{length}</p>
      </div>
    </div>
  );
};

export default Card;
