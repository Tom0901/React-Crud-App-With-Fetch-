import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const DataDetails = ({ iterator }) => {
  const { removeData, updateData } = useContext(DataContext);

  //toggling edit UI state has to be held at this component level..
  //otherwise all items toggle due to loop

  const [editToggle, setEditToggle] = useState([{ showContent: false }]);
  let currentState = editToggle[0].showContent;

  const toggleHandler = () => {
    setEditToggle([{ showContent: !currentState }]);
  };

  //store edited values in state//

  const [editLogin, setEditLogIn] = useState("");

  const submitHandler = (e) => {
    console.log("click");
    e.preventDefault();
    setEditToggle([{ showContent: !currentState }]);
    updateData(editLogin, iterator.id);
    setEditLogIn("");
  };

  return (
    <div className="book-list">
      <li>
        <div className="title">{iterator.name}</div>
        <FontAwesomeIcon
          icon={faEdit}
          className="edit"
          onClick={toggleHandler}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="delete"
          onClick={(e) => {
            removeData(iterator.name);
          }}
        />
      </li>
      {editToggle[0].showContent ? (
        <form>
          <input
            type="text"
            value={editLogin}
            onChange={(e) => {
              setEditLogIn(e.target.value);
            }}
          />

          <FontAwesomeIcon
            icon={faEdit}
            className="edit"
            onClick={submitHandler}
          />
        </form>
      ) : null}
    </div>
  );
};

export default DataDetails;
