import "./Slideshow.css";
import { useState, useEffect, useRef } from "react";

export default function Slideshow({ slideshowData, closeHandler }) {
  const [index, setIndex] = useState(0);
  const delay = 2000;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  let pictureData = slideshowData[index];
  let src = pictureData.src;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideshowData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="box">
      <div className="infoBox">
        <img className="slideshowImage" src={src} alt="" />
        <button className="closeButton" onClick={closeHandler}>
          Close
        </button>
      </div>
    </div>
  );
}

/*import React from "react";
import { SliderData } from "./SlideData.js";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Slideshow.css";

const Slideshow = ({ slides }) => {
  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" />
      <FaArrowAltCircleRight className="right-arrow" />

      {SliderData.map((slides) => {
        return <img className="imagetwo" src={slides.image} alt="" />;
      })}
    </div>
  );
};
export default Slideshow;
*/
