import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Navbar = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="navbar">
      <h1>Asteroid Counter 2.0</h1>
      <p>
        This app uses fetch() and NASA's API to track asteroids that passed near
        earth in the past week. There were {data.length} asteroids last week!
      </p>
    </div>
  );
};

export default Navbar;
