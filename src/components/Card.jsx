import Icons from "./Icons";
import "../styles/components.css";

function Card({ bike, handleClick }) {
  const bikeImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaFa5S5I_ZGML8N7JSAa3EJsm7yU4r8w3Gw&usqp=CAU";

  function handleSelect() {
    return handleClick(bike.id);
  }

  return (
    <div className="main-card-container center">
      <div className="inner-card-container" onClick={() => handleSelect()}>
        <p>{bike.title}</p>
        <div className="card-img-container center">
          <img src={bike.imgUrl} alt="pic" />
        </div>
        <div className="card-info-footer">
          <span>{bike.priceRange.maxPrice.amount}Kr</span>
          {"shit" === "shit" ? <Icons type={"star"} /> : <Icons type={"hollow-star"} />}
        </div>
      </div>
    </div>
  );
}

export default Card;
