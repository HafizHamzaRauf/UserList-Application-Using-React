import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
function ErrorModal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onOkay}></div>
      <Card classname={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onOkay} type="submit">
            okay
          </Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorModal;
