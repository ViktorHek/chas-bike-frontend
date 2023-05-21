import "../styles/components.css";

function BikePreView({bike, handleClick}) {
  console.log('in preview', bike)
  const bikeImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaFa5S5I_ZGML8N7JSAa3EJsm7yU4r8w3Gw&usqp=CAU";

  function handleSelect() {
    return handleClick(bike.id)
  }

  return (
    <div className="main-preview-container">
      <div className="inner-preview-container">
        <div className="preview-bike-img-container">
          <img src={bikeImg} alt="pic" />
          <div className="preview-bike-img-info-container">
            <span>Speed Limit</span>
            <span>Battery Life</span>
          </div>
        </div>
        <div className="preview-data-container">
          <p>Model: {bike.title}</p>
          <button onClick={() => handleSelect()}>Choose</button>
        </div>
      </div>
    </div>
  );
}

export default BikePreView;
