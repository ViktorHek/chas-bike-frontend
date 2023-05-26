import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../styles/home.css";

function Home() {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const backgrondImg =
    "data:image/jpeg;base64,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";

  function handleLogin() {
    setOpenLogin(!openLogin);
    console.log("clicking login");
  }

  function handleRegister() {
    setOpenRegister(!openRegister);
    console.log("clicking register");
  }

  function handleSubmitRegistration(event) {
    event.preventDefault();
    if(!event.target[0].value || !event.target[1].value || !event.target[2].value) {
      alert('missing something')
      return 
    }
    const payload = {
      email: event.target[0].value,
      userName: event.target[1].value,
      password: event.target[2].value
    }
    console.log({payload});
  }

  function handleSubmitLogin(event) {
    event.preventDefault();
    console.log("logi: ", event);
  }

  return (
    <div className="home-main-container">
      <img src={backgrondImg} alt="sorry :(" className="home-backgrond-img" />
      <Link to={"/bike"}>
        <h1>hello home</h1>
      </Link>
      <div className="home-button-container">
        <Button
          text={"Login"}
          handleClick={handleLogin}
          disabled={false}
          size={"big"}
          color={"primary"}
        />
        <Button
          text={"Register"}
          handleClick={handleRegister}
          disabled={false}
          size={"big"}
          color={"primary"}
        />
      </div>
      {openRegister && (
        <div className="main-register-container">
          <form onSubmit={(event) => handleSubmitRegistration(event)}>
            <div className="email-input-container">
              <label>
                Email:
                <input type="text" name="email" />
              </label>
            </div>
            <div className="name-input-container">
              <label>
                User Name:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="password-input-container">
              <label>
                Password:
                <input type="text" name="password" />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
      {openLogin && (
        <div className="main-login-container">
          <form onSubmit={handleSubmitLogin(event)}>
            <div className="name-input-container">
              <label>
                User Name:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="password-input-container">
              <label>
                Password:
                <input type="text" name="password" />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
}

export default Home;
