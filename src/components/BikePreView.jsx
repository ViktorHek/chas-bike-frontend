import "../styles/components.css";

function BikePreView({ bike, handleClick }) {
  
  const {
    availableForSale,
    category,
    description,
    id,
    imgUrl,
    priceRange,
    title,
    totalInventory,
    vendor,
  } = bike;

  function handleSelect() {
    return handleClick(bike);
  }

  return (
    <div className="main-preview-container">
      <div className="inner-preview-container">
        <div className="preview-bike-img-container">
          <img src={imgUrl} alt="pic" />
          <div className="preview-bike-img-info-container">
            <span style={{ color: availableForSale ? "green" : "red" }}>
              Inventory: {totalInventory}
            </span>
            <span>
              Price: {priceRange.minPrice.amount} {priceRange.minPrice.currencyCode}
            </span>
            <span>Vendor: {vendor}</span>
            <span>Category: {category}</span>
          </div>
        </div>
        <div className="preview-data-container">
          <span>
            <p>Model: {title}</p>
          </span>
          <div className="preview-description-text-container">
            <p>{description}</p>
          </div>
          <button onClick={() => handleSelect()}>Choose</button>
        </div>
      </div>
    </div>
  );
}

export default BikePreView;
