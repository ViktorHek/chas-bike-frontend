import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import global from "../global";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  function handleLogin() {
    setOpenLogin(!openLogin);
    console.log("clicking login");
  }

  function handleRegister() {
    setOpenRegister(!openRegister);
    console.log("clicking register");
  }

  const handleSubmitRegistration = async (event) => {
    event.preventDefault();
    if (!event.target[0].value || !event.target[1].value || !event.target[2].value) {
      alert("missing something");
      return;
    }
    const payload = {
      email: event.target[0].value,
      userName: event.target[1].value,
      password: event.target[2].value,
    };
    let result = await axios.put("/register", { payload });
    if (result.status === 200) {
      setOpenRegister(!openRegister);
    }
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    if (!event.target[0].value || !event.target[1].value) {
      alert("missing something");
      return;
    }
    const payload = {
      userName: event.target[0].value,
      password: event.target[1].value,
    };
    let result = await axios.post("/login", { payload });
    if (result.data.userName) {
      navigate("/bike");
    } else {
      alert(result.data);
    }
    console.log("logi: ", result);
  };

  return (
    <div className="home-main-container">
      {openRegister || openLogin ? (
        <div className="home-header-container">
          <span style={{ color: openLogin ? "#000000" : "#04444D" }}>SIGN IN</span>
          <span className="seperator"></span>
          <span style={{ color: openRegister ? "#000000" : "#04444D" }}>SIGN UP</span>
        </div>
      ) : (
        <span style={{height: "20%", backgroundColor: "transparent"}}>
        </span>
      )}
      <div className="home-inner-container center">
        <img src="/home-bg.png" alt="sorry :(" className="home-backgrond-img" />
        {!openRegister && !openLogin ? (
          <>
            <span className="home-wellcome-text">Wellcome Biker!</span>

            <div className="home-button-container">
              <Button
                text={"Sign in"}
                handleClick={handleLogin}
                disabled={false}
                size={"big"}
                type={"secondary"}
                color={"primary"}
              />
              <Button
                text={"Sign up"}
                handleClick={handleRegister}
                disabled={false}
                size={"big"}
                type={"secondary"}
                color={"primary"}
              />
            </div>
          </>
        ) : null}
        {openRegister && (
          <div className="main-register-container">
            <span className="close-modal-button" onClick={() => setOpenRegister(!openRegister)}>
              x
            </span>
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
            <span className="close-modal-button" onClick={() => setOpenLogin(!openLogin)}>
              x
            </span>
            <form onSubmit={(event) => handleSubmitLogin(event)}>
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
    </div>
  );
}

export default Home;
