import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.page";
import NotFound from "./pages/NotFound.page";
import Bike from "./pages/Bike.page";
import Map from "./pages/Map.page";
import Card from "./pages/Card.page";
import History from "./pages/History.page";
import Social from "./pages/Social.page";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/map" element={<Map />} />
        <Route path="/card" element={<Card />} />
        <Route path="/history" element={<History />} />
        <Route path="/social" element={<Social />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="link-container">
        <div className="link-inner-container">
          <Link to={"/bike"}>bike</Link>
          <Link to={"/map"}>map</Link>
          <Link to={"/card"}>card</Link>
          <Link to={"/history"}>history</Link>
          <Link to={"/social"}>social</Link>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
