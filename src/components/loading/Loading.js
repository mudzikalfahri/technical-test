import React from "react";
import { ClockLoader } from "react-spinners";
import "./loading.css";

function Loading() {
  return (
    <div className="loading-state">
      <ClockLoader size={20} color="black" />
      <p>Loading Data</p>
    </div>
  );
}

export default Loading;
