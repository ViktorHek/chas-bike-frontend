import "../styles/components.css";

function Card(prop) {
  const bikeImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaFa5S5I_ZGML8N7JSAa3EJsm7yU4r8w3Gw&usqp=CAU";

  return (
    <div className="main-card-container">
      <div className="inner-card-container">
        <img src={bikeImg} alt="pic" />
        <span>star</span>
        <p>{prop.title}</p>
      </div>
    </div>
  );
}

export default Card;
