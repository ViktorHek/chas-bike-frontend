import "../styles/card.css";

function Card() {

  return (
    <div className="main-card-conatiner">
      <div className="card-info-container">
        <p>card</p>
      </div>
      <button className="refill-button">Refill</button>
      <div className="card-history-container">
        <span>History</span>
        <button>Sort By Date</button>
      </div>
    </div>
  );
}

export default Card;
