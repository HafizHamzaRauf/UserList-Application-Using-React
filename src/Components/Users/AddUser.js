import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsValid(false);
      setError({
        title: "Invalid  input",
        message: "Please Enter a valid username or age",
      });
      return;
    }
    if (+age < 1) {
      setIsValid(false);
      setError({
        title: "Invalid age",
        message: "Please Enter a valid age (greater than 1)",
      });
      return;
    }
    const user = {
      username: username,
      age: age,
    };
    props.onAdd(user);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const onErrorHandler = () => {
    setIsValid(true);
  };
  return (
    <div>
      {!isValid && (
        <ErrorModal
          title={error.title}
          msg={error.message}
          onOkay={onErrorHandler}
        />
      )}
      <Card classname={styles.form}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            valule={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
