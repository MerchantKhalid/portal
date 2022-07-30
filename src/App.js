import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Pages/Navbar/Navbar";
import About from "./Components/Pages/About/About";
import Appointment from "./Components/Appointment/Appointment";

function App() {
  return (
    <div className="px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
