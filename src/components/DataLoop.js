import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import DataDetails from "./DataDetails";

export default function DataLoop() {
  const { data } = useContext(DataContext);
  return data.length ? (
    <div>
      {data.map((iterator) => {
        return <DataDetails iterator={iterator}></DataDetails>;
      })}
    </div>
  ) : (
    <div className="empty">No more Users =)</div>
  );
}
