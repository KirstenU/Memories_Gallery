import "./GalleryItem.css";
import React, { useState } from "react";
import Popup from "../Popup/Popup.js";

export default function GalleryItem({ itemData, polaroidData }) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="itemContainer">
      <img className="image" src={itemData.src} alt="" />
      <img
        onClick={() => setButtonPopup(true)}
        className="polaroid"
        src={polaroidData.src}
        alt=""
      />
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        className="popup"
      >
        <h3>Information about the Picture</h3>
        <p>{itemData.info} </p>
      </Popup>
      <h2>Title: {itemData.title}</h2>
      {itemData.author.length > 0 && <p>Published by: {itemData.author}</p>}
    </div>
  );
}

//alt tag im img ist eig unnötig, wirft aber ohne eig ne fehlermeldung aus
// leider zu unschön <img className="klammer" src={klammerData.src} alt="" />

/*Mit Hilfe von useState und useEffect eine Slideshow im eigenen Projekt erstellen
die Slideshow wechselt, wenn geöffnet, in einem festgelegten Zeitabstand zwischen den 
Bildern der Galerie (müssen nicht mehr zwingend im Polaroidrahmen sein)
über ein Menü kann zwischen unserer Galerie und der Slideshow gewechselt werden 
(Alternativ kann sich die Slideshow auch wie das Popup über unsere aktuelle Galerie legen)*/
