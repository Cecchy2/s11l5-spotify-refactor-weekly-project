import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MySideBar from "./components/MySideBar";
import MainComponent from "./components/MainComponent";
import PlayerComponent from "./components/PlayerComponent";

function App() {
  return (
    <BrowserRouter>
      <MySideBar />
      <MainComponent />
      <PlayerComponent />
    </BrowserRouter>
  );
}

export default App;
