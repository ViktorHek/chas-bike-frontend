import { useState } from "react";
import global from "../global";
import "../styles/bike.css";
import Chip from "../components/Chip";
import Card from "../components/Card";
import BikePreView from "../components/BikePreView";

function Bike() {
  const [bikePreView, setBikePreView] = useState(0);
  const types = ["tour", "city", "hybrid", "Trailor"];
  const bikes = [
    { id: 1, title: "boss Bike" },
    { id: 2, title: "Cool Bike" },
    { id: 3, title: "SXXB 900" },
    { id: 4, title: "Bikeenator" },
  ];

  function handleCardClick(el) {
    setBikePreView(el);
  }

  function handlePreviewClick() {
    console.log("clicking on preview");
  }

  return (
    <div className="main-bike-container">
      <div className="header-container">
        <div className="header-text-container">
          <p>Hello {global.testUser.name}</p>
          <h1>Choose your bike</h1>
        </div>
        <div className="header-img-container">
          <img src={global.testUser.imgUrl} alt="profilePic" />
        </div>
      </div>
      <div className="type-selector-container">
        <div className="inner-type-selector-container">
          {types.map((el) => {
            return <Chip bike={el} key={el} />;
          })}
        </div>
      </div>
      <div className="bike-card-container">
        <div className="inner-bike-card-container">
          {bikes.map((el) => {
            return <Card bike={el} key={el.id} handleClick={handleCardClick} />;
          })}
        </div>
      </div>
      {bikePreView !== 0 ? (
        <BikePreView bike={bikes[bikePreView]} handleClick={handlePreviewClick} />
      ) : null}
    </div>
  );
}

export default Bike;
