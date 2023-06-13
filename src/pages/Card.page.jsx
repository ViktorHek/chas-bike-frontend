import "../styles/card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";

function Card() {
  const [user, setUser] = useState(null);
  const [cal, setCal] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    populateUser();
  }, []);

  const populateUser = async () => {
    let responce = await axios.get("/user");
    let user = responce.data;
    setUser(user);
  };

  function changeCal(val) {
    console.log({ val });
    setCal(val);
  }

  function handleSubmit() {
    console.log("elllll");
  }

  return (
    <div className="main-card-conatiner">
      <div className="card-header">
        <div className="card-inner-header">
          <span>Payment</span>
          <div>{user && <img src={user.imgUrl} alt="profile" />}</div>
        </div>
        <div className="dummy-card-img-container center">
          <img src="/fake-credit-card.jpg" alt="sorry :(" />
        </div>
      </div>
      <div className="refill-button-container">
        <Button text={"Refill"} />
      </div>
      <div className="card-bottom-container">
        <span className="card-cal-title">Choose a date</span>
        <div className="card-calender-container">
          <input type="date" onChange={changeCal} />
          <span>Rent untill: {cal}</span>
        </div>
        <div className="card-price-container">
          <span>Total</span>
          <span>£££</span>
        </div>
        <div className="card-buttons-container">
          <div className="card-button-container">
            <Button text={"Cancel"} color={"white"} />
          </div>          
          <div className="card-button-container">
            <Button text={"pay"} />
          </div>          
        </div>
      </div>
    </div>
  );
}

export default Card;
