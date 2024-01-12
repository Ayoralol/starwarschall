import styles from "./Button.module.scss";

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
