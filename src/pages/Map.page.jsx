import { useState } from "react";
import "../styles/map.css";
import Icons from "../assets/Icons";

function Map() {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const mapImg =
    "https://as2.ftcdn.net/v2/jpg/03/81/60/25/1000_F_381602552_JRRn6oZUvJ6SuC17MNeBT4NLNdZkuLq3.jpg";

  const routes = [
    { id: 1, title: "Route 1", distance: 4.3, time: "1h", comments: ["asda", "regte5g", "ohwef"] },
    { id: 2, title: "Route 2", distance: 4.3, time: "2h", comments: [] },
    { id: 3, title: "Route 3", distance: 4.3, time: "3h", comments: ["ohwef"] },
    { id: 4, title: "Route 4", distance: 4.3, time: "4h", comments: ["asda", "regte5g"] },
    { id: 5, title: "Route 5", distance: 4.3, time: "5h", comments: ["asda", "regte5g", "ohwef"] },
  ];

  function handleSearch(event) {
    let value = event.target.value;
    console.log("serch: ", value);
  }

  function handleSelectRoute(event, el) {
    event.preventDefault();
    console.log({event})
    console.log({el})
    setSelectedRoute(routes[0]);
  }

  return (
    <div className="main-map-conatiner">
      <div className="map-img-container">
        <img src={mapImg} alt="sorry :(" />
      </div>
      {!selectedRoute ? (
        <div className="map-data-container">
          <div className="search-bar">
            <label>
              <input name="search" type="text" onChange={handleSearch} />
            </label>
          </div>
          {routes.map((el) => {
            return (
              <div className="route-container" key={el.id}>
                <div
                  className="inner-route-container"
                  onClick={(event, el) => handleSelectRoute(event, el)}>
                  <span>{el.title}</span>
                  <div className="route-data">
                    <div>
                      <Icons type={"hollowBike"} color={"black"} opacity={1} />
                      <p>{el.distance}km</p>
                    </div>
                    <div>
                      <Icons type={"clock"} color={"black"} opacity={1} /> <p>{el.time}</p>
                    </div>
                    <div>
                      <Icons type={"comment"} color={"black"} opacity={1} />{" "}
                      <p>{el.comments.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="selected-route-main-container">
          <div className="selected-route-title-container">
            <span>{selectedRoute.title}</span>
          </div>
          <div className="selected-route-icons-container">
            <div className="selected-route-icon-bubble">
              <Icons type={"bike"} color={"black"} opacity={1} />
            </div>
            <div className="selected-route-icon-bubble">
              <Icons type={"bike"} color={"black"} opacity={1} />
            </div>
            <div className="selected-route-icon-bubble">
              <Icons type={"bike"} color={"black"} opacity={1} />
            </div>
            <div className="selected-route-icon-bubble">
              <Icons type={"bike"} color={"black"} opacity={1} />
            </div>
          </div>
          <div className="selected-route-info-container">
            <span>Info about the route</span>
            <div className="selected-route-info-text-bubble">
              <span>
                distance is: {selectedRoute.distance} km. Time is: {selectedRoute.time}.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Map;
