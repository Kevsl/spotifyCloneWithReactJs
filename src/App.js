import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./views/search";
import Home from "./views/home";
import Albums from "./views/albums";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </div>
  );
}

export default App;
