import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getAllByPlaceholderText } from "@testing-library/react";
export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setData] = useState({});
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  //populate state using fetch. Nested in a useEffect hook//

  useEffect(() => {
    async function fetchData() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();

      let aWeekAGo = new Date();
      let ddW = String(aWeekAGo.getDate()).padStart(2, "0");
      let mmW = String(aWeekAGo.getMonth() + 1).padStart(2, "0");
      let yyyyW = aWeekAGo.getFullYear();

      aWeekAGo = yyyyW + "-" + mmW + "-" + ddW;
      today = yyyy + "-" + mm + "-" + dd;
      console.log(today);
      const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${aWeekAGo}&end_date=${today}&api_key=lVeZpKcp0Maaxtt7TTE8drDubBUi9pbamhfOtE2k`
      );
      res
        .json()
        .then((res) => res.near_earth_objects[`${today}`])
        .then((res) => setData(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  }, []);

  console.log(data);

  //the second parameter passed in tells useEffect that..
  //it relies on no dependencies and therefore doesn't re run on rerenders!!
  //success is sweet!!!!

  const addData = (login) => {
    setData([...data, { name: login, id: uuidv4() }]);
  };
  const removeData = (name) => {
    console.log("called");
    setData(data.filter((iteration) => iteration.name !== name));
  };

  const updateData = (newName, id) => {
    setData(
      data.map((iterator) => {
        if (iterator.id !== id) {
          return iterator;
        } else {
          iterator.name = newName;
          return iterator;
        }
      })
    );
  };

  return (
    <DataContext.Provider value={{ data, addData, removeData, updateData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
