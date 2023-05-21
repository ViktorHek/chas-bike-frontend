import global from "../global";
import "../styles/bike.css";
import Chip from "../components/Chip";
import Card from "../components/Card";

function Bike() {
  const types = ["tour", "city", "hybrid", "Trailor"];
  const bikes = ["boss Bike", "Cool Bike", "SXXB 900", "Bikeenator"];

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
            return <Chip text={el} />;
          })}
        </div>
      </div>
      <div className="bike-card-container">
        <div className="inner-bike-card-container">
          {bikes.map((el) => {
            return <Card title={el} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Bike;
