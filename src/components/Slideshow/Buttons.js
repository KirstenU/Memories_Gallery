import { useState } from "react";
import Slideshow from "../Slideshow/Slideshow.js";
import "./Buttons.css";

export default function Buttons({ itemData }) {
  const [showSlideshow, setShowSlideshow] = useState(false);

  const changeButtonState = () => {
    setShowSlideshow(!showSlideshow);
    console.log(showSlideshow);
  };

  return (
    <div className="container">
      <button onClick={changeButtonState} className="button">
        zur SlideShow hier lang
      </button>
      {showSlideshow && (
        <Slideshow slideshowData={itemData} closeHandler={changeButtonState} />
      )}
    </div>
  );
}
