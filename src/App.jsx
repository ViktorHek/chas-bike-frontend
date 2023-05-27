import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.page";
import NotFound from "./pages/NotFound.page";
import Bike from "./pages/Bike.page";
import Map from "./pages/Map.page";
import Card from "./pages/Card.page";
import Account from "./pages/Account.page";
import Social from "./pages/Social.page";
import Icons from "./assets/Icons";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/map" element={<Map />} />
        <Route path="/card" element={<Card />} />
        <Route path="/account" element={<Account />} />
        <Route path="/social" element={<Social />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="link-container">
        <div className="link-inner-container">
          <Link to={"/bike"}>
            <Icons type={"bike"} color={"black"} opacity={1} />
          </Link>
          <Link to={"/map"}>
            <Icons type={"map"} color={"black"} opacity={1} />
          </Link>
          <Link to={"/card"}>
            <Icons type={"card"} color={"black"} opacity={1} />
          </Link>
          <Link to={"/social"}>
            <Icons type={"bike"} color={"black"} opacity={1} />
          </Link>
          <Link to={"/account"}>
            <Icons type={"userBox"} color={"black"} opacity={1} />
          </Link>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
