import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MySideBar from "./components/MySideBar";
import MainComponent from "./components/MainComponent";
import PlayerComponent from "./components/PlayerComponent";
import LibraryComponent from "./components/LibraryComponent";

function App() {
  return (
    <BrowserRouter>
      <MySideBar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/library" element={<LibraryComponent />} />
      </Routes>
      <PlayerComponent />
    </BrowserRouter>
  );
}

export default App;
