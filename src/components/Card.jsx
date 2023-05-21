import "../styles/components.css";

function Card({bike, handleClick}) {
  const bikeImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaFa5S5I_ZGML8N7JSAa3EJsm7yU4r8w3Gw&usqp=CAU";

  function handleSelect() {
    return handleClick(bike.id)
  }

  return (
    <div className="main-card-container">
      <div className="inner-card-container" onClick={() => handleSelect()}>
        <img src={bikeImg} alt="pic" />
        <span>star</span>
        <p>{bike.title}</p>
      </div>
    </div>
  );
}

export default Card;
