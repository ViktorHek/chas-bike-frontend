import { useState } from "react";
import global from "../global";
import Icons from "../assets/Icons";
import "../styles/account.css";

function Account() {
  const [displayGifts, setDisplayGifts] = useState(false);

  function handleClick() {
    setDisplayGifts(!displayGifts);
  }

  const circleImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_P2155vWFW_GvoIDyogabAwkcs7N1suKA0g&usqp=CAU";

  const giftsList = ["Package", "Backpack", "Tour1", "Tour2", "Tour3"];

  return (
    <div className="main-account-conatiner">
      {displayGifts && (
        <div className="main-gifts-display-container">
          <div className="gifts-circle-container">
            {/* <span className="main-circle">
              <span className="progression-circle"></span>
            </span> */}
            <div style={{height: '200px', width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={circleImg} alt="circle" style={{maxHeight: '100%', maxWidth: '100%'}}/>
            </div>
          </div>
          <button className="open-gift-button">Open up a gift</button>
          <div className="gifts-list-container">
            <span>Available Gifts</span>
            <div className="gifts-list">
              {giftsList.map((el) => {
                return (
                  <div className="gift-container">
                    <span>{el}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="account-header-conatiner">
        <span>Hi, {global.testUser.name}!</span>
        <div className="account-header-img-conatiner">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjH9ymD5drOzVeQ9qNi-AKLnf_HO6NCG8jyQ&usqp=CAU"
            alt="profile"
          />
        </div>
      </div>
      <div className="account-stats-container">
        <div className="account-outer-stat-container">
          <div className="account-stats-icon-container">
            <Icons type={"bike"} color={"black"} opacity={1} />
          </div>
          <div className="account-inner-stat-container">
            <span>{global.testUser.kilometers}</span>
            <p>km</p>
          </div>
        </div>
        <div className="account-outer-stat-container">
          <div className="account-stats-icon-container">
            <Icons type={"hollowBike"} color={"black"} opacity={1} />
          </div>
          <div className="account-inner-stat-container">
            <span>{global.testUser.rides}</span>
            <p>rides</p>
          </div>
        </div>
        <div className="account-outer-stat-container">
          <div className="account-stats-icon-container">
            <Icons type={"comment"} color={"black"} opacity={1} />
          </div>
          <div className="account-inner-stat-container">
            <span>{global.testUser.carbon}</span>
            <p>carbon</p>
          </div>
        </div>
      </div>
      <button className="explore-button" onClick={() => handleClick()}>
        Explore gifts
      </button>
      <div className="account-activity-container">
        <span>Activity</span>
        <div className="account-activity-diagram-container">Diagram of activity of the week</div>
      </div>
    </div>
  );
}

export default Account;
