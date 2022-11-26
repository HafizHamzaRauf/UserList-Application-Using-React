import styles from "./Button.module.css";
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.button}
      type={props.type || "submit"}
    >
      {props.children}
    </button>
  );
}

export default Button;
