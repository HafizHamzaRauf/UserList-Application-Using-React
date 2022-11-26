import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [list, setList] = useState([]);
  const addUserHandler = (user) => {
    setList((prevState) => [...prevState, user]);
  };

  return (
    <div>
      <AddUser onAdd={addUserHandler} />
      <UserList users={list} />
    </div>
  );
}
export default App;
