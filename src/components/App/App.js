import "./App.css";
import Header from "../Header/Header.js";
import GalleryItem from "../GalleryItem/GalleryItem.js";
import { data, frameData } from "../Data/galleryEntries.js";
import Buttons from "../Slideshow/Buttons.js";

export default function Memories() {
  return (
    <div className="app">
      <Header />
      {data.map((element) => (
        <GalleryItem
          key={element.title}
          itemData={element}
          polaroidData={frameData[1]}
        />
      ))}
      <Buttons itemData={data} />
    </div>
  );
}
