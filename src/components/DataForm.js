import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

export default function DataForm() {
  const { addData } = useContext(DataContext);

  const [user, setUser] = useState("");

  const userInput = (e) => {
    console.log("function called");
    e.preventDefault();
    addData(user);
    setUser("");
  };
  return (
    <div>
      <form onSubmit={userInput}>
        <input
          type="text"
          placeholder="Asteroid Name"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          required
        ></input>

        <input type="submit" value="Add An Asteroid" />
      </form>
    </div>
  );
}
