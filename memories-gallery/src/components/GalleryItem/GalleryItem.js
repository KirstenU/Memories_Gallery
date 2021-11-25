import "./GalleryItem.css";
import React from "react";

function FunctionClick(itemData) {
  alert(itemData.info);
}

export default function GalleryItem({ itemData, polaroidData, klammerData }) {
  return (
    <div className="itemContainer">
      <img className="image" src={itemData.src} alt="" />
      <img
        onClick={() => FunctionClick(itemData)}
        className="polaroid"
        src={polaroidData.src}
        alt=""
      />
      <h2>Title: {itemData.title}</h2>
      {itemData.author.length > 0 && <p>Published by: {itemData.author}</p>}
    </div>
  );
}

//alt tag im img ist eig unnötig, wirft aber ohne eig ne fehlermeldung aus
// leider zu unschön <img className="klammer" src={klammerData.src} alt="" />
