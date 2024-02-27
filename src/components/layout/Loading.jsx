import React from "react";
import spinner from "./assets/GearSpinner.svg";

function Loading() {
  return (
    <div className="flex justify-center w-100 mt-20">
      <img src={spinner} alt="Spinner" />
    </div>
  );
}

export default Loading;