import Icons from "../assets/Icons";
import "../styles/social.css";

function Social() {
  const events = [
    {
      title: "Bike Challenge",
      length: 50,
      participants: 500,
      text: "iosvodf jioefoiqhsdof jnosdrfghnqiod ofhngioqdgbnil jodfgbniadfv dfjogbnqdiog",
    },
    {
      title: "Bike Challenge 1",
      length: 35,
      participants: 504,
      text: "iosvodf jioefoiqhsdof jnosdrfghnqiod ofhngioqdgbnil jodfgbniadfv dfjogbnqdiog",
    },
    {
      title: "Bike Challenge 2",
      length: 11,
      participants: 5000,
      text: "iosvodf jioefoiqhsdof jnosdrfghnqiod ofhngioqdgbnil jodfgbniadfv dfjogbnqdiog",
    },
    {
      title: "Bike Challenge 3",
      length: 56,
      participants: 5,
      text: "iosvodf jioefoiqhsdof jnosdrfghnqiod ofhngioqdgbnil jodfgbniadfv dfjogbnqdiog",
    },
    {
      title: "Bike Challenge 4",
      length: 40,
      participants: 20,
      text: "iosvodf jioefoiqhsdof jnosdrfghnqiod ofhngioqdgbnil jodfgbniadfv dfjogbnqdiog",
    },
    {
      title: "Bike Challenge 5",
      length: 5,
      participants: 0,
      text: "iosvodf jioefoiqhsdof jnosdrfghnqiod ofhngioqdgbnil jodfgbniadfv dfjogbnqdiog",
    },
    {
      title: "Bike Challenge 6",
      length: 77,
      participants: 100,
      text: "iosvodf jioefoiqhsdof jnosdrfghnqiod ofhngioqdgbnil jodfgbniadfv dfjogbnqdiog",
    },
    {
      title: "Bike Challenge 7",
      length: 350,
      participants: 200,
      text: "iosvodf jioefoiqhsdof jnosdrfghnqiod ofhngioqdgbnil jodfgbniadfv dfjogbnqdiog",
    },
    {
      title: "Bike Challenge 8",
      length: 50,
      participants: 530,
      text: "iosvodf jioefoiqhsdof jnosdrfghnqiod ofhngioqdgbnil jodfgbniadfv dfjogbnqdiog",
    },
  ];

  return (
    <div className="main-social-conatiner">
      <div className="social-header">
        <span>Title for page</span>
      </div>
      <div className="event-list-container">
        {events.map((el) => {
          return (
            <div className="event-container">
              <Icons type={"bike"} color={"black"} opacity={1} />
              <div className="event-info-container">
                <span>{el.title}</span>
                <p>Lenght: {el.length}km</p>
                <p>Participants: {el.participants}</p>
              </div>
              <button>Join</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Social;
