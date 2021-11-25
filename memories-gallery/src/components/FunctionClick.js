import React from "react";

export default function FunctionClick({ itemData }) {
  function showInfo() {
    console.log("TEST");
  }
  return (
    <div>
      <button onClick={showInfo}>Show more information</button>
    </div>
  );
}
