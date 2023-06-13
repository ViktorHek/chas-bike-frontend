import "../styles/card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";

function Card() {
  const location = useLocation()
  const navigate = useNavigate()
  let price = "£££"

  if(location.state) {
    price = location.state.priceRange.maxPrice.amount
  }

  const [user, setUser] = useState(null);
  const [displayConfimation, setDisplayConfimation] = useState(false);
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
    setCal(val.target.value);
  }

  return (
    <div className="main-card-conatiner">
      {displayConfimation ? (
        <div className="confirmaion-container center">
          <img src="/Bike 1.jpg" alt="sorry :("/>
          <div className="confirmation-box">
            <span onClick={() => setDisplayConfimation(!displayConfimation)}>x</span>
            <p>Yore bike is now booked!</p>
          </div>
        </div>
      ):null}
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
          <span>{price}</span>
        </div>
        <div className="card-buttons-container">
          <div className="card-button-container">
            <Button text={"Cancel"} color={"white"} handleClick={() => navigate("/bike")} />
          </div>          
          <div className="card-button-container">
            <Button text={"pay"} handleClick={() => setDisplayConfimation(!displayConfimation)} />
          </div>          
        </div>
      </div>
    </div>
  );
}

export default Card;
