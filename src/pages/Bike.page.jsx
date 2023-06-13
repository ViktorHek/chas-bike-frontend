import { useState, useEffect } from "react";
import global from "../global";
import "../styles/bike.css";
import Chip from "../components/Chip";
import Card from "../components/Card";
import BikePreView from "../components/BikePreView";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Bike() {
  const navigate = useNavigate()
  const [bikePreView, setBikePreView] = useState(null);
  const [bikes, setBikes] = useState([]);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    populateBikes();
  }, []);

  const populateBikes = async () => {
    let responce = await axios.get("/bikes/all");
    let bikes = responce.data;
    setBikes(bikes);
    let categorys = bikes.map((el) => {
      return el.category;
    });
    let uniqueCategorys = categorys.filter((value, index, array) => array.indexOf(value) === index);
    setCategorys(uniqueCategorys);
  };

  function handleCardClick(id) {
    let selectedBike = bikes.filter((el) => el.id === id);
    setBikePreView(selectedBike[0]);
  }

  function handlePreviewClick(bike) {
    console.log("clicking on preview");
    setBikePreView(null);
    navigate("/card", {state: bike})
  }

  function handleChipClick(text) {
    console.log("hello", text);
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
        <div className="type-selector-container">
          <div className="inner-type-selector-container">
            {categorys.length &&
              categorys.map((el) => {
                return <Chip text={el} key={el} handleClick={(text) =>handleChipClick(text)} />;
              })}
          </div>
        </div>
      </div>
      <div className="bike-card-container">
        <div className="inner-bike-card-container">
          {bikes.length &&
            bikes.map((el) => {
              return <Card bike={el} key={el.id} handleClick={handleCardClick} />;
            })}
        </div>
      </div>
      {bikePreView ? <BikePreView bike={bikePreView} handleClick={handlePreviewClick} /> : null}
    </div>
  );
}

export default Bike;
