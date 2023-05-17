import global from "../global";
import "../styles/bike.css";

function Bike() {
  const types = ["tour", "city", "hybrid", "Trailor"];

  return (
    <>
      <div className="header-container">
        <div className="inner-header-container">
          <div className="header-text-container">
            <h3>Hello {global.testUser.name} </h3>
            <h1>Choose your bike</h1>
          </div>
          <div className="header-img-container">
            <img src={global.testUser.imgUrl} alt="profilePic" />
          </div>
        </div>
      </div>
      <div className="type-selector-container">
        <div className="inner-type-selector-container">
          {types.map((el) => {
            return <div className="chip">{el}</div>;
          })}
        </div>
      </div>
      <div className="bike-card-container">
        <div className="inner-bike-card-container">
          
        </div>
      </div>
    </>
  );
}

export default Bike;
